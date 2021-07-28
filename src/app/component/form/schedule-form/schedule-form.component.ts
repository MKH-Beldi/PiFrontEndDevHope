import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Schedule} from '../../../model/schedule';
import {AuthService} from '../../../shared/auth.service';
import {User} from '../../../model/user';

@Component({
  selector: 'app-schedule-form',
  templateUrl: './schedule-form.component.html',
  styleUrls: ['./schedule-form.component.css']
})
export class ScheduleFormComponent implements OnInit {
  schedule = new Schedule() ;
  endDate: Date ;
  user = new User();
  @Input() starChild = new Date();
  @Output() addEvent = new EventEmitter<Schedule>();
  @Output() editEvent = new EventEmitter<Schedule>();

  constructor(private loginService: AuthService) { }
  ngOnInit(): void {


  }

  sendAddNotif() {
    this.schedule.start = new Date(this.starChild);
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
