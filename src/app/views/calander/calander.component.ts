import { Component, OnInit } from '@angular/core';
import {AgendaService, DayService, MonthService, WeekService, WorkWeekService} from "@syncfusion/ej2-angular-schedule";

@Component({
  selector: 'app-calander',
  //templateUrl: './calander.component.html',
  template: `<ejs-schedule> </ejs-schedule>`,
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  styleUrls: ['./calander.component.css']
})
export class CalanderComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
