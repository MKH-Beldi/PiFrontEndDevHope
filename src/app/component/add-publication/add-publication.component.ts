import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Publication } from 'src/app/model/publication';
import { User } from 'src/app/model/user';
import { NotificationService } from 'src/app/shared/notification.service';
import { PublicationService } from 'src/app/shared/publication.service';

@Component({
  selector: 'app-add-publication',
  templateUrl: './add-publication.component.html',
  styleUrls: ['./add-publication.component.css']
})
export class AddPublicationComponent implements OnInit {
  publication: Publication;
  userId
  constructor(    private serviceRoute: ActivatedRoute,
    private publicationService: PublicationService,
    private notifyService: NotificationService,
    private router: Router,


    ) { }

  ngOnInit(): void {
     this.userId = this.serviceRoute.snapshot.params.userId;
    this.publication = new Publication()
    const user = new User()
    user.id = this.userId
    this.publication.userDr = user

  }
  AddPub(){
    // this.publication.createdAt = new Intl.DateTimeFormat('en-US')
    // this.publication.updatedAt = new Intl.DateTimeFormat('en-US')
    console.log(this.publication)
    this.publicationService.addPublication(this.publication).subscribe(
      (res)=>{console.log(res)
        this.notifyService.showSuccess('Publication ajoutée avec succès !', 'Ajout');
        this.router.navigate(['/publication/list/', this.userId]);

      },
      (err)=>{console.log(err)}
    )
  }
}


