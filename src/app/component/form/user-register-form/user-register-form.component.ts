import { Component, OnInit } from '@angular/core';
import {User} from '../../../model/user';
import {UserService} from '../../../shared/user.service';
import {NotificationService} from '../../../shared/notification.service';
import {Router} from '@angular/router';
import {AuthService} from '../../../shared/auth.service';
import {ProfilService} from '../../../shared/profil.service';
import {Profil} from '../../../model/profil';
import {SpecialtyDr} from "../../../model/specialtyDr";
import {SpecialtyDrService} from "../../../shared/specialty-dr.service";

@Component({
  selector: 'app-user-register-form',
  templateUrl: './user-register-form.component.html',
  styleUrls: ['./user-register-form.component.css']
})
export class UserRegisterFormComponent implements OnInit {

  user = new User();
  userRoles:  any[];
  role: string;
  specialty: SpecialtyDr;
  profile = new Profil();
  specialtesDr: SpecialtyDr[];

  constructor(private specialtyDrService: SpecialtyDrService, private userService: UserService, private notifyService: NotificationService, private router: Router, private authService: AuthService, private profileService: ProfilService) { }

  ngOnInit(): void {
    this.userRoles  = this.userService.getRoles();
    this.specialtyDrService.getAll().subscribe(
      (data: SpecialtyDr[]) => {
        this.specialtesDr = data;
      }
    );
  }

  addUser(){
    if (this.specialty) {
      let spes = new  Array();
      spes.push(this.specialty);
      this.user.specialtyDr = spes;
    }
    this.user.roles = new  Array();
    this.user.roles.push(this.role);
    this.userService.addUser(this.user).subscribe(
      (data: any[]) => {
          const idUser = data[0];
          this.notifyService.showSuccess('User ajouté avec succès !', 'Ajout');
          this.authService.authenticate(this.user.email, this.user.password).subscribe(
            () => {
                this.profile.userDr = new User();
                this.profile.userDr.id = idUser;
                if (this.user.roles[0] == 'ROLE_DR'){
                  this.profileService.addProfil(this.profile).subscribe(
                    () => {
                      this.notifyService.showInfo('Profile créé avec succès !', 'Ajout');
                      this.router.navigate(['']).then(
                        () => {
                          window.location.reload();
                        });
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
