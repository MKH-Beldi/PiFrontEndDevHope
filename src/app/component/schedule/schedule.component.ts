
import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {FormGroup, Validators} from '@angular/forms';
import {ScheduleService} from '../../shared/schedule.service';
import {Schedule} from '../../model/schedule';
declare let $: any;

@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.css'],
  providers: [],
templateUrl: './schedule.component.html'

})

export class ScheduleComponent {

  schedules: Schedule[];
  s: Schedule;
  list: [];
  /* Add Event Form */
  eventdate: string;
  successdata: any;
  addEventForm: FormGroup;
  submitted = false;

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'timeGridWeek',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: []
  };

  constructor(private scheduleService: ScheduleService) {
  }

  ngOnInit(): void {

    this.scheduleService.getSchedule().subscribe(
      (data: any[]) => {
        this.schedules = data;
        this.calendarOptions.events = data;
      }
    );
  }


  handleDateClick(arg) {
    console.log(typeof $);
    $('#myModal').modal("show");
    $(".modal-title").text("");
    $(".modal-title").text("Add Event at : "+arg.dateStr);

  }

  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr);
  }

  //handleDateClick(info) {
  //alert('Clicked on: ' + info.dateStr);
  //alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
  ///alert('Current view: ' + info.view.type);
  //alert('date click! ' + info.dateStr);
  // info.dayEl.style.backgroundColor = 'red';
  //  const title = prompt('Please enter a new title for your event');
  //  const calendarApi = info.view.calendar;

  //calendarApi.unselect(); // clear date selection
  // }


  //Add user form actions
  get f() {
    return this.addEventForm.controls;
  }

  onSubmit() {

    this.submitted = true;
    // stop here if form is invalid and reset the validations
    this.addEventForm.get('title').setValidators([Validators.required]);
    this.addEventForm.get('title').updateValueAndValidity();
    console.warn(this.addEventForm.value);

    if (this.addEventForm.invalid) {
      return;
    }
    //Form Submittion and send data via API
    if (this.submitted) {
      // Initialize Params Object
      var myFormData = new FormData();
      // Begin assigning parameters
      myFormData.append('title', this.addEventForm.value.title);
      myFormData.append('start', this.eventdate);
      myFormData.append('end', this.eventdate);
      return this.scheduleService.addSchedule(this.s).subscribe();
    }
  }







}











