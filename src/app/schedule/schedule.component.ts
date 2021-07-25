import {Component, OnInit, ViewChild} from '@angular/core';
import {Schedule} from '../model/schedule';
import {ScheduleService} from '../shared/schedule.service';
import { CalendarOptions } from '@fullcalendar/angular';
import {EventCalander} from "../model/event";


@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.css'],
  providers: [],
templateUrl: './schedule.component.html'

})

export class ScheduleComponent {

  schedules: Schedule[];
  list: [];

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

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit():void {

    this.scheduleService.getSchedule().subscribe(
      (data: any[]) => {
        this.schedules = data;
        this.calendarOptions.events = data;
      }
    );
  }



  handleDateClick(arg) {
    alert('date click! ' + arg.dateStr);
  }

  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr);
  }

}











