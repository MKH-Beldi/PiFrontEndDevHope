import { Component, OnInit } from '@angular/core';
import { Profil } from 'src/app/model/profil';
import { ProfilService } from 'src/app/shared/profil.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  connected:Boolean = true
  profile : Profil
  userId
  constructor(private profileService:ProfilService) { }

  ngOnInit(): void {
    this.profileService.getByp('id', '1').subscribe(
      (res:Profil[])=>{
        this.profile = res[0]
        this.userId = this.profile.userDr.id
      },
      (err)=>{console.log(err)}
    )
  }
  logout(){
   console.log('logout..')
  }
}
