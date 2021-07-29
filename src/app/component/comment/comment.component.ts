import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Publication } from 'src/app/model/publication';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/shared/comment.service';
import { NotificationService } from 'src/app/shared/notification.service';
import {AuthService} from "../../shared/auth.service";

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
userId: number;
pubId
comments : any[]
showForm:Boolean = false
newComment
  role: string;
commentToEdit
  user: User;
addForm:Boolean
  constructor(    private serviceRoute: ActivatedRoute,
    private commentService : CommentService,
    private notifyService: NotificationService, private loginService: AuthService

    ) { }

  ngOnInit(): void {
    this.pubId = this.serviceRoute.snapshot.params.pubId;
  this.loginService.getUser().subscribe(
    (data: User) => {
      this.user = data;
      this.role = this.user.roles[0];
      this.userId = this.user.id;
      this.commentService.getByc('publication',this.pubId).subscribe(
        (res)=>{
          console.log(res)
          this.comments = res
        },
        (err)=>{console.log(err)}
      )
    }
  );

  }
  updateComment(comment){
    this.commentToEdit = comment
    this.addForm = false;
    this.newComment = comment.contente
    this.showForm = true
    window.scrollTo(0,document.body.scrollHeight);
  }
  deleteComment(comment){
    this.commentService.deleteComment(comment.id,comment).subscribe(
      (res)=>{console.log(res)
        this.notifyService.showSuccess('Commentaire supprimé avec succès !', 'Suppression');
        this.comments = this.comments.filter(comm=>comm.id != comment.id)
      },
      (err)=>{console.log(err)}
    )
  }
  affAddCommentForm(){
    this.showForm = true
    this.addForm = true;
  }
  addComment(){
    let comment = new Comment()
    comment.contente = this.newComment
    let user = new User()
    user.id = this.user.id
    const pub = new Publication()
    pub.id = this.pubId
    comment.publication = pub
    comment.user = user;
    console.log({comment})
    this.commentService.addComment(comment).subscribe(
      (res)=>{console.log(res)
        this.notifyService.showSuccess('Commentaire ajouté avec succès !', 'Ajout');
        this.comments.push(comment);
      },
      (err)=>{console.log(err)}
    )

    this.showForm = false
  }
  editComment(){
    this.commentToEdit.contente = this.newComment
    console.log(this.commentToEdit)
    this.commentService.updateComment(this.commentToEdit.id, this.commentToEdit).subscribe(
      (res)=>{console.log(res)
        this.notifyService.showSuccess('Commentaire modifié avec succès !', 'Modification');
        this.showForm = false
      },
      (err)=>{console.log(err)},
    )
  }
}
