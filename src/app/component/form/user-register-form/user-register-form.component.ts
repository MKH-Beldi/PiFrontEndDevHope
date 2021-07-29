import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../shared/user.service';
import {NotificationService} from '../../../shared/notification.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';
import {ProfilService} from '../../../shared/profil.service';
import {Profil} from '../../../model/profil';

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.css']
})
export class UserRegisterFormComponent implements OnInit {

  user = new User();
  userRoles: string [];
  role: string;
  profile = new Profil();

  constructor(private userService: UserService, private notifyService: NotificationService, private router: Router, private authService: AuthService, private profileService: ProfilService) { }

  ngOnInit(): void {
    this.userRoles  = this.userService.getRoles();
  }

  addUser(){
    this.user.roles = new  Array();
    this.user.roles.push(this.role);
    console.log(this.user);
    this.userService.addUser(this.user).subscribe(
      (data: any[]) => {
          const idUser = data[0];
          this.notifyService.showSuccess('User ajouté avec succès !', 'Ajout');
          console.log(this.user.roles[0], data[0]);
          this.authService.authenticate(this.user.email, this.user.password).subscribe(
            () => {
                this.profile.userDr = new User();
                this.profile.userDr.id = idUser;
                console.log(this.profile.userDr.id, this.user.roles[0] );
                if (this.user.roles[0] == 'ROLE_DR'){
                  this.profileService.addProfil(this.profile).subscribe(
                    () => {
                      this.notifyService.showInfo('Profile créé avec succès !', 'Ajout');
                    }
                  );
                }
                this.router.navigate(['']).then(
                  () => {
                  window.location.reload();
                });
            }
          );
      });
  }
}
