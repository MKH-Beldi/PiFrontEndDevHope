import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Profil } from 'src/app/model/profil';
import { NotificationService } from 'src/app/shared/notification.service';
import { ProfilService } from 'src/app/shared/profil.service';
import {AuthService} from '../../shared/auth.service';
import {User} from '../../model/user';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  profile: Profil;
  idUser: number;
  constructor(private profileService: ProfilService,
              private notifyService: NotificationService,
              private router: Router, private loginService: AuthService) { }

  ngOnInit(): void {
    this.loginService.getUser().subscribe(
      (data: User) => {
        this.idUser = data.id;
        console.log(this.idUser);
        this.profileService.getByp('userDr', this.idUser).subscribe(
          (res: Profil[]) => {
            console.log(res[0]);
            this.profile = res[0];
            console.log(this.profile); },
          (err) => {console.log(err); }
        );
      }
    );
  }
modifier(){
  this.profile.updatedA =  new Intl.DateTimeFormat('en-US');
  this.profileService.updateProfil(this.profile.id, this.profile).subscribe(
    (res) => {
    console.log(res);
    this.notifyService.showSuccess('Profile modifié avec succès !', 'Modification');
  },
    (err) => {console.log(err); }
  );
}


goToAddPub(){
  this.router.navigate(['/publication/add', this.profile.userDr.id]);

}
  goToPub(){
    this.router.navigate(['publication/list', this.profile.userDr.id]);

  }
}
