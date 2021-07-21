import { Component, OnInit } from '@angular/core';
import { EventSettingsModel, View, DayService, WeekService, WorkWeekService, MonthService, AgendaService } from '@syncfusion/ej2-angular-schedule';
import { DataManager, ODataV4Adaptor, Query ,WebApiAdaptor } from '@syncfusion/ej2-data';
import {Schedule} from "../model/schedule";
import {ScheduleService} from "../shared/schedule.service";
@Component({
  selector: 'app-schedule',
  styleUrls: ['./schedule.component.css'],
  providers: [DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  template: `<ejs-schedule width='100%' height='550px' [selectedDate]="selectedDate" [eventSettings]="eventSettings"></ejs-schedule>`
})
export class ScheduleComponent implements OnInit {

  list : Schedule[] ;



  constructor(private scheduleService: ScheduleService) {
  }
  public readonly: boolean = true;
  public selectedDate: Date = new Date(2020, 9, 20);
  private dataManager: DataManager = new DataManager({
    url: this.scheduleService.url ,
    adaptor: new WebApiAdaptor(),
    crossDomain:true
  });
  public eventSettings: EventSettingsModel = {
    dataSource: this.dataManager };

  ngOnInit(): void {
    this.scheduleService.getSchedule().subscribe((data: Schedule[]) =>
      this.list = data);
    console.log(this.list);
  }

}
