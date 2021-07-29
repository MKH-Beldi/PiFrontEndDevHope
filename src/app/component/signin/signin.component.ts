import { Component, OnInit } from '@angular/core';
import {AuthService} from '../../shared/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  email = '';
  password = '';
  invalidLogin = false;

  constructor(private service: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  login(){
   this.service.authenticate(this.email, this.password).subscribe(
     (data: any) => {
       this.router.navigate([''])
         .then(() => {
           window.location.reload();
         });
       this.invalidLogin = false;
     }
   );
  }

}
