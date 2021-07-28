
import {Component, OnInit, ViewChild} from '@angular/core';
import { CalendarOptions } from '@fullcalendar/angular';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {ScheduleService} from '../../shared/schedule.service';
import {Schedule} from '../../model/schedule';
import {NotificationService} from '../../shared/notification.service';
import DateTimeFormat = Intl.DateTimeFormat;
import {ConsultationService} from "../../shared/consultation.service";
import {Consultation} from "../../model/consultation";
import {User} from "../../model/user";
import {AuthService} from '../../shared/auth.service';

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
  idEvent: number;
  titleEvent: string;
  startEvent: Date;
  endEvent: Date;
  s: Schedule;
  list: [];
  consultation = new Consultation();
  user = new User();

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



  constructor(private loginService: AuthService, private scheduleService: ScheduleService, private notifyService: NotificationService, private consultationService: ConsultationService) {}

  ngOnInit(): void {
    this.loginService.getUser().subscribe(
      (data: User) => {
        this.user = data;
        if (this.user.roles[0] == 'ROLE_ADMIN'){
          this.scheduleService.getSchedule().subscribe(
            (data: any[]) => {
              this.schedules = data;
              this.calendarOptions.events = data;
            }
          );
        }else if (this.user.roles[0] == 'ROLE_DR') {
          this.scheduleService.getBy('userDr', this.user.id).subscribe(
            (data: any[]) => {
              this.schedules = data;
              this.calendarOptions.events = data;
          }
          );
        }else if (this.user.roles[0] == 'ROLE_PATIENT') {
          this.scheduleService.getBy('userPatient', this.user.id).subscribe(
            (data: any[]) => {
              this.schedules = data;
              this.calendarOptions.events = data;
            }
          );
        }
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
          this.consultation.status = this.consultationService.getStatus()[0];
          this.consultationService.addConsultation(this.consultation).subscribe(
            (data: any[]) => {
              let s = new Schedule();
              s.consultation = new Consultation();
              s.consultation.id = data[0];
              console.log(s);
              this.scheduleService.updateSchedule(schedule.id, s).subscribe();
            }
          );
        }
      }
    );
  }

  handleDateClick(arg) {

    $("#myModal1").modal("show");
    this.star = arg.dateStr;
    console.log(this.star);
    console.log((arg.id));


  }
  showSchedule(info) {



    $("#myModal2").modal("show");
    $("#myModal1").modal("hide");



    this.idEvent= info.event.id;
    this.titleEvent = info.event.title;
    this.startEvent = info.event.start;
    this.endEvent = info.event.end;

    //  alert('Coordinates: ' + info.jsEvent.pageX + ',' + info.jsEvent.pageY);
    //alert('View: ' + info.view.type);
    console.log(info);

  }



  onDateClick(res) {
    alert('Clicked on date : ' + res.dateStr);
  }



  updateSchedule( id: number, schedule: Schedule  ) {

    console.log(schedule);
    this.scheduleService.updateSchedule(2, schedule).subscribe(
      (status) => {
        if (status.status === 201 ){
          this.notifyService.showInfo('schedule modifié avec succès !', 'Modification');
        }
      }
    );
  }

}











