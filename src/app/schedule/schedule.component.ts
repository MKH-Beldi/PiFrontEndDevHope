import {Component, OnInit, ViewChild} from '@angular/core';
import {Schedule} from "../model/schedule";
import {ScheduleService} from "../shared/schedule.service";

import { CalendarOptions } from '@fullcalendar/angular';
import {HttpClient} from "@angular/common/http";


@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.css'],
  providers: [],
templateUrl: './schedule.component.html'



})

export class ScheduleComponent {



  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr)
  }

  // events: any[];

  Events = [];

  list: Schedule[];

  calendarOptions: CalendarOptions = {
    headerToolbar: {
      left: 'prev,next today',
      center: 'title',
      right: 'dayGridMonth,timeGridWeek,timeGridDay,listWeek'
    },
    initialView: 'dayGridMonth',
    weekends: true,
    editable: true,
    selectable: true,
    selectMirror: true,
    dayMaxEvents: true,
    dateClick: this.handleDateClick.bind(this), // bind is important!
    events: [
      {this: this.list },
      { title: 'event 2', date: '2021-08-02' }
    ]
  };

  constructor(private httpclient: HttpClient) {
  }
  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr)
  }


    ngOnInit():void {
      setTimeout(() => {
        return this.httpclient.get("http://127.0.0.1:8000/api/schedule/")
          .subscribe(res => {
            this.Events.push(res);
            console.log(this.Events);
          });
      }, 2200);
      setTimeout(() => {
        this.calendarOptions = {
          initialView: 'dayGridMonth',
          dateClick: this.onDateClick.bind(this),
          events: this.Events
        };
      }, 2500);

    }

}











