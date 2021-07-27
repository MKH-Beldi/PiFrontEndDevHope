import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../shared/user.service';
import {NotificationService} from "../../../shared/notification.service";

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.css']
})
export class UserRegisterFormComponent implements OnInit {

  user = new User();
  userRoles: string [];
  role: string;

  constructor(private userService: UserService, private notifyService: NotificationService) { }

  ngOnInit(): void {
    this.userRoles  = this.userService.getRoles();
  }

  addUser(){

    this.user.roles = new  Array();
    this.user.roles.push(this.role);
    console.log(this.user);
    this.userService.addUser(this.user).subscribe(
      (status) => {
        if (status.status === 201 ){
          this.notifyService.showSuccess('User ajouté avec succès !', 'Ajout');
        }
      }
    );
  }

}
