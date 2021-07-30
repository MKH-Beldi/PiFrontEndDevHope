import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';

import {Schedule} from '../../../model/schedule';
import {AuthService} from '../../../shared/auth.service';
import {User} from '../../../model/user';
import {UserService} from "../../../shared/user.service";
import {Consultation} from "../../../model/consultation";

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  schedule = new Schedule() ;
  endDate: Date ;
  user = new User();
  us: User [];
  userDR: string [];
  @Input() starChild = new Date();

  @Output() addEvent = new EventEmitter<Schedule>();
  @Output() editEvent = new EventEmitter<Schedule>();
  @Output() hidmod = new EventEmitter<Schedule>();

  constructor(private loginService: AuthService , private userService: UserService) { }
  ngOnInit(): void {
         }


  sendAddNotif() {
    this.schedule.start = new Date(this.starChild);

   this.schedule.end = new Date(this.endDate);
    //this.schedule.userPatient.id = 1;
    this.schedule.isAvailable = false;
    console.log(this.schedule);
    this.addEvent.emit(this.schedule);

    this.loginService.getUser().subscribe(
      (data: User) => {
        this.user = data;
        this.schedule.userPatient = new User();
        this.schedule.userPatient.id = this.user.id;
        this.schedule.userDr = new User();
        this.schedule.userDr.id = 5;
        this.schedule.isAvailable = false;
        console.log(this.schedule);
        this.addEvent.emit(this.schedule);
      }
    );
  }

}
