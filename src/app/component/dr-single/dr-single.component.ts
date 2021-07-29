import {Component, Input, OnInit} from '@angular/core';
import {User} from "../../model/user";
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-dr-single',
  templateUrl: './dr-single.component.html',
  styleUrls: ['./dr-single.component.css']
})
export class DrSingleComponent implements OnInit {

  @Input() dr: User;
  isAuth: boolean;

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
    this.isAuth = this.loginService.isUserLoggedIn();
  }

}
