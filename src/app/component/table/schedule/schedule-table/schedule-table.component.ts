import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from "../../../../model/schedule";
import {ScheduleService} from "../../../../shared/schedule.service";
import {NotificationService} from "../../../../shared/notification.service";

import DateTimeFormat = Intl.DateTimeFormat;
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-schedule-table',
  templateUrl: './schedule-table.component.html',
  styleUrls: ['./schedule-table.component.css']
})
export class ScheduleTableComponent implements OnInit {
  @Output() editEvent = new EventEmitter<Schedule>();
  @Input() idChild: number;
  @Input()  titlechild : string;
  @Input() startchild : Date ;
  @Input()  endchild : Date ;
  schedule = new Schedule();
  schedules: Schedule[];

  constructor( private scheduleService: ScheduleService, private notifyService: NotificationService ) { }

  ngOnInit(): void {
  }


  deleteSchedule(schedule: Schedule){
    this.schedule.id = this.idChild ;
    this.scheduleService.deleteSchedule(schedule.id).subscribe(
      (status) => {
        if (status.status === 201){
          this.notifyService.showError('rendez-vous  supprimé avec succès !', 'Delete');
        }
        console.log(this.schedule);

      }
    );

  }


  sendEditNotif() {
    this.schedule.id = +this.idChild;
    this.schedule.title = this.titlechild;
    console.log(this.titlechild);

    this.schedule.start = this.startchild;

    this.schedule.end = this.endchild;
    // this.schedule.start = new Date( datepipe.transform(this.startchild, 'dd-MM-yyyy HH:mm:ss'));
    // this.schedule.end = new Date( datepipe.transform(this.endchild, 'dd-MM-yyyy HH:mm:ss'));
    console.log(this.schedule);


    this.editEvent.emit(this.schedule);
  }


}
