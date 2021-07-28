import { Component, OnInit } from '@angular/core';
import {User} from '../../model/user';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  username: string;
  user = new User();
  isAuth: boolean;
  role: string;

  constructor(private loginService: AuthService, private router: Router) { }

  ngOnInit(): void {
    this.isAuth = this.loginService.isUserLoggedIn();
    if (this.isAuth) {
      this.username = sessionStorage.getItem('username');
      this.loginService.getUser().subscribe(
        (data: User) => {
          this.user = data;
          this.role = this.user.roles[0];
        }
      );
    }
  }

  logOut(){
    this.loginService.logOut();
    this.router.navigate([''])
      .then(() => {
        window.location.reload();
      });
  }

}
