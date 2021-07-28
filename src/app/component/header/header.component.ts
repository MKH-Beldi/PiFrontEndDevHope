import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  user: User;

  constructor(private loginService: AuthService) { }

  ngOnInit(): void {
    this.username = sessionStorage.getItem('username');
    this.loginService.getUser().subscribe(
      (data: User) => {
        this.user = data;
      }
    );
  }

}
