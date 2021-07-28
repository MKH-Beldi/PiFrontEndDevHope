import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultationFormComponent} from './component/form/consultation-form/consultation-form.component';
import {ConsultationTableComponent} from './component/table/consultation-table/consultation-table.component';
import {SymptomTableComponent} from './component/table/symptom-table/symptom-table.component';
import {SymptomListComponent} from './component/symptom-list/symptom-list.component';
import {SymptomFormComponent} from './component/form/symptom-form/symptom-form.component';
import { HomeComponent } from './component/home/home.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AddPublicationComponent } from './component/add-publication/add-publication.component';
import { ListPublicationComponent } from './component/list-publication/list-publication.component';
import { CommentComponent } from './component/comment/comment.component';
import { ListProfileComponent } from './component/list-profile/list-profile.component';


const routes: Routes = [
  {path: '' , component: HomeComponent},
  {path: 'profile' , component: ProfilComponent},
  { path: 'consultation/table', component: ConsultationTableComponent },
  { path: 'consultation/add', component: ConsultationFormComponent },
  { path: 'consultation/edit/:id', component: ConsultationFormComponent },
  { path: 'symptom/table', component: SymptomTableComponent },
  { path: 'symptom/list', component: SymptomListComponent },
  { path: 'symptom/add', component: SymptomFormComponent },
  { path: 'publication/add/:userId', component: AddPublicationComponent },
  { path: 'publication/list/:userId', component: ListPublicationComponent },
  { path: 'comment/list/:pubId/:userId', component: CommentComponent },
  { path: 'profile/list', component: ListProfileComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
