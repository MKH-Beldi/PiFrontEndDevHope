import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Profil } from 'src/app/model/profil';
import { Publication } from 'src/app/model/publication';
import { NotificationService } from 'src/app/shared/notification.service';
import { ProfilService } from 'src/app/shared/profil.service';
import { PublicationService } from 'src/app/shared/publication.service';
import {AuthService} from '../../shared/auth.service';
import {User} from '../../model/user';


@Component({
  selector: 'app-list-profile',
  templateUrl: './list-profile.component.html',
  styleUrls: ['./list-profile.component.css']
})
export class ListProfileComponent implements OnInit {
  searchValue: string;
  profileSelect: any[];
  filtreName: string;
  filtreValue: string;
  config: any;
  totalData: any;
  viewForm: boolean;
  user = new User();

  profiles: Profil[];
  userId;
  constructor(private serviceRoute: ActivatedRoute,
              private profileService: ProfilService,
              private notifyService: NotificationService,
              private router: Router, private loginService: AuthService

  ) { }

  ngOnInit(): void {
    this.userId = this.serviceRoute.snapshot.params.userId;
    this.profileService.getAll().subscribe(
      (res: Profil[]) => {
        this.profiles = res;
        console.log(this.profiles);
        this.totalData = this.profiles.length;
        this.profileSelect = this.profiles.map(
          o => o.note).filter((value, index, self) => self.indexOf(value) === index);
      }, ( err) => {
        console.log(err);
      }
    );

    this.viewForm = false ;
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalData
    };

  }


  getFiltreName(by: string){
    this.filtreName = by;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
}
