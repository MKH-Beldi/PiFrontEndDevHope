import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/model/publication';
import { NotificationService } from 'src/app/shared/notification.service';
import { PublicationService } from 'src/app/shared/publication.service';

@Component({
  selector: 'app-list-publication',
  templateUrl: './list-publication.component.html',
  styleUrls: ['./list-publication.component.css']
})
export class ListPublicationComponent implements OnInit {
  publicationToEdit: Publication;
  searchValue: string;
  publicationSelect: any[];
  filtreName: string;
  filtreValue: string;
  config: any;
  totalData: any;
  viewForm: boolean;


  publications: Publication[];
  userId;
  constructor(private serviceRoute: ActivatedRoute,
              private publicationService: PublicationService,
              private notifyService: NotificationService,
              private router: Router,

) { }

  ngOnInit(): void {
     this.userId = this.serviceRoute.snapshot.params.userId;
     this.publicationService.getAll().subscribe(
      (res: Publication[]) => {
        this.publications = res;
        this.totalData = this.publications.length;
        this.publicationSelect = this.publications.map(
                o => o.title).filter((value, index, self) => self.indexOf(value) === index);
      }, (err) => {
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

  sendEdit(p: Publication) {
    this.viewForm = true;
    this.publicationToEdit = p;
  }
  editPublication(p: Publication) {
    this.viewForm = true;
    this.publications.map(pub => {
      if (pub.id === p.id){
        pub = p;
      }
  });
    console.log(this.publications);
    this.publicationService.updatePublication(p.id, p).subscribe(
      (res) => {
        console.log(res);
        this.notifyService.showSuccess('Publication modifiée avec succès !', 'Modification');

      },
      (err) => {
        console.log(err);
      },
    );
  }
  deletePublication(p: Publication){
    this.publicationService.deletePublication(p.id, p).subscribe(
      (res) => {
        console.log(res);
        this.notifyService.showSuccess('Publication supprimée avec succès !', 'Suppression');
        this.publications = this.publications.filter(pub => pub.id != p.id);
      },
      (err) => {
        console.log(err);
      },
    );
  }

  getFiltreName(by: string){
    this.filtreName = by;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }
  commentPublication(p: Publication){
    this.router.navigate(['/comment/list/', p.id, this.userId]);
  }
}
