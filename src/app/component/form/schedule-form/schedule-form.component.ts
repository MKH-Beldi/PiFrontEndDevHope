import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../../model/schedule";
import DateTimeFormat = Intl.DateTimeFormat;
import {end} from "@popperjs/core";


@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  schedule = new Schedule() ;
  endDate : Date ;
  @Input() starChild = new Date();
  @Output() addEvent = new EventEmitter<Schedule>();
  @Output() editEvent = new EventEmitter<Schedule>();

  constructor() { }
  ngOnInit(): void {

  }
  sendAddNotif() {
    this.schedule.start = new Date(this.starChild);
   // this.schedule.end = new Date(this.endDate);
    //this.schedule.userPatient.id = 1;
    this.schedule.isAvailable = false;
    console.log(this.schedule);
    this.addEvent.emit(this.schedule);
  }



}
