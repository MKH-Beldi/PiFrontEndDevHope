
import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ScheduleService} from '../../shared/schedule.service';
import {Schedule} from '../../model/schedule';
import {User} from "../../model/user";
import {NotificationService} from '../../shared/notification.service';
import DateTimeFormat = Intl.DateTimeFormat;

declare let $: any;

@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.css'],
  providers: [],
templateUrl: './schedule.component.html'

})

export class ScheduleComponent {

  schedules: Schedule[];
  star: DateTimeFormat;
  userPat = new User();
  s: Schedule;
  list: [];

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
    events: [ ]
  };



  constructor(private scheduleService: ScheduleService ,private notifyService: NotificationService) {}

  ngOnInit(): void {

    this.scheduleService.getSchedule().subscribe(
      (data: any[]) => {
        this.schedules = data;
        this.calendarOptions.events = data;
      }
    );
  }

  addSchedule(schedule: Schedule){
    console.log(schedule);
    this.scheduleService.addSchedule(schedule).subscribe(
      (data: any[]) => {
        if (data[0]){
          schedule.id = data[0];
          this.schedules.push(schedule);
          this.notifyService.showSuccess('schedule ajouté avec succès !', 'Ajout');
        }
      }
    );
  }




  handleDateClick(arg) {
    this.star = arg.dateStr;
    console.log(this.star);

    $("#myModal").modal("show");
    $(".modal-title, .eventstarttitle").text("");
    $(".modal-title").text("Add Event at : "+arg.dateStr);
    $(".eventstarttitle").text(arg.dateStr);

  }

  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr);
  }



 // hideForm(){
  //  this.addEventForm.patchValue({ title : ""});
    //this.addEventForm.get('title').updateValueAndValidity();
  //}

  deleteSchedule(schedule: Schedule){
    this.scheduleService.deleteSchedule(schedule.id).subscribe(
      (status) => {
        if (status.status === 201){
          const indexDelete = this.schedules.indexOf(schedule);
          this.schedules.splice(indexDelete, 1);
          this.notifyService.showError('rendez-vous  supprimé avec succès !', 'Delete');
        }

      }
    );

  }

}











