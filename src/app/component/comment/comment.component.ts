import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Comment } from 'src/app/model/comment';
import { Publication } from 'src/app/model/publication';
import { User } from 'src/app/model/user';
import { CommentService } from 'src/app/shared/comment.service';
import { NotificationService } from 'src/app/shared/notification.service';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
  styleUrls: ['./comment.component.css']
})
export class CommentComponent implements OnInit {
userId
pubId
comments : any[]
showForm:Boolean = false
newComment
commentToEdit
addForm:Boolean
  constructor(    private serviceRoute: ActivatedRoute,
    private commentService : CommentService,
    private notifyService: NotificationService,

    ) { }

  ngOnInit(): void {
    this.userId = this.serviceRoute.snapshot.params.userId;
    this.pubId = this.serviceRoute.snapshot.params.pubId;
    this.commentService.getByc('publication',this.pubId).subscribe(
      (res)=>{
      console.log(res)
      this.comments = res
      },
      (err)=>{console.log(err)}
    )
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
    const comment = new Comment()
    comment.contente = this.newComment
    const user = new User()
    user.id = this.userId
    comment.user = user
    const pub = new Publication()
    pub.id = this.pubId
    comment.publication = pub
    console.log({comment})
    this.commentService.addComment(comment).subscribe(
      (res)=>{console.log(res)
        this.notifyService.showSuccess('Commentaire ajouté avec succès !', 'Ajout');
        //this.comments.push()
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
