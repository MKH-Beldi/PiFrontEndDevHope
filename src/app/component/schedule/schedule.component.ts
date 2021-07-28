
import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ScheduleService} from '../../shared/schedule.service';
import {Schedule} from '../../model/schedule';
import {NotificationService} from '../../shared/notification.service';
import DateTimeFormat = Intl.DateTimeFormat;
import {formatNumber} from "@angular/common";
import {ActivatedRoute, Router} from '@angular/router';

declare let $: any;
declare let s: any;


@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.css'],
  providers: [],
  templateUrl: './schedule.component.html'

})

export class ScheduleComponent {

  schedules: Schedule[];
  star: DateTimeFormat;
  idEvent: number ;
  titleEvent: string;
  startEvent: Date;
  endEvent: Date;
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
    eventTimeFormat: { hour12: false, hour: '2-digit', minute: '2-digit' },

    weekends: true,

    editable: true,
    selectable: true,
    selectMirror: true,

    // dayMaxEvents: true,

    eventClick: this.showSchedule.bind(this),
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [ ]
  };



  constructor(private scheduleService: ScheduleService ,private notifyService: NotificationService , private router: Router) {}

  ngOnInit(): void {

    this.scheduleService.getSchedule().subscribe(
      (data: any[]) => {
        this.schedules = data;
        this.calendarOptions.events = data;
      }
    );
  }

  getScheduleBy () {
    //this. = this.serviceRoute.snapshot.params.idEvent;
    this.scheduleService.getBy('schedule',1).subscribe(
      (res: any [])=>{

        this.schedules = res;
        this.calendarOptions.events = res;
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
          $("#myModal").modal("hide");

        }
      }
    );
  }

  handleDateClick(arg) {

    $("#myModal1").modal("show");
   // alert('selected ' + arg.startStr + ' to ' + arg.endStr);
    this.star = arg.dateStr;
    console.log(this.star);
    console.log((arg.id));


  }
  showSchedule(info) {



    $("#myModal2").modal("show");
    $("#myModal1").modal("hide");



    this.idEvent = info.event.id  ;
    this.titleEvent = info.event.title;
    this.startEvent = info.event.start;
    this.endEvent = info.event.end;
    console.log(typeof this.idEvent);
    console.log(typeof info);

    console.log(typeof this.startEvent);
   // var idEvent: number = +this.idEvent;


    //  alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    //alert('View: ' + info.view.type);
    console.log(info);

  }



  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr);
  }



  updateSchedule(  schedule: Schedule  ) {
    schedule.id = +schedule.id;
    console.log(schedule);
    this.scheduleService.updateSchedule(+schedule.id, schedule).subscribe(

      (status) => {
        if (status.status === 201 ){
          this.notifyService.showInfo('schedule modifié avec succès !', 'Modification');
          this.router.navigate(['/schedule/list']);

        }
      }
    );
  }

}











