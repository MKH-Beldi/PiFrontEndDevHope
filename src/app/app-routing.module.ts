import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultationFormComponent } from './component/form/consultation-form/consultation-form.component';
import { ConsultationTableComponent } from './component/table/consultation-table/consultation-table.component';
import { SymptomTableComponent } from './component/table/symptom-table/symptom-table.component';
import { SymptomListComponent } from './component/symptom-list/symptom-list.component';
import { SymptomFormComponent } from './component/form/symptom-form/symptom-form.component';
import { ScheduleComponent } from './component/schedule/schedule.component';
import { ScheduleTableComponent } from './component/table/schedule/schedule-table/schedule-table.component';
import { ProfilComponent } from './component/profil/profil.component';
import { AddPublicationComponent } from './component/add-publication/add-publication.component';
import { ListPublicationComponent } from './component/list-publication/list-publication.component';
import { CommentComponent } from './component/comment/comment.component';
import { MedicalExamListComponent } from './component/medical-exam-list/medical-exam-list.component';
import { FileMedicalExamListComponent } from './component/file-medical-exam-list/file-medical-exam-list.component';
import { CertificatListComponent } from './component/certificat-list/certificat-list.component';
import { MedicalExamViewComponent } from './component/medical-exam-view/medical-exam-view.component';
import { UserRegisterFormComponent } from './component/form/user-register-form/user-register-form.component';
import { SigninComponent } from './component/signin/signin.component';
import { ScheduleFormComponent } from './component/form/schedule-form/schedule-form.component';



const routes: Routes = [
  {path: 'profile' , component: ProfilComponent},
  { path: 'consultation/table', component: ConsultationTableComponent },
  { path: 'consultation/add', component: ConsultationFormComponent },
  { path: 'consultation/edit/:id', component: ConsultationFormComponent },
  { path: 'symptom/table', component: SymptomTableComponent },
  { path: 'symptom/list', component: SymptomListComponent },
  { path: 'symptom/add', component: SymptomFormComponent },
  { path: 'symptom/list/:idCons', component: SymptomListComponent },
  { path: 'publication/add/:userId', component: AddPublicationComponent },
  { path: 'publication/list/:userId', component: ListPublicationComponent },
  { path: 'publication/list', component: ListPublicationComponent },
  { path: 'comment/list/:pubId/:userId', component: CommentComponent },
  { path: 'certificat/table', component: CertificatListComponent },
  { path: 'medicalExam/table', component: MedicalExamListComponent },
  { path: 'fileMedicalExam/table', component: FileMedicalExamListComponent },
  { path: 'user/add', component: UserRegisterFormComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'medicalExamView/:id', component: MedicalExamViewComponent },
  { path: 'schedule/list/:userId', component: ScheduleComponent },
  { path: 'schedule/list', component: ScheduleComponent },
  { path: 'schedule/add', component: ScheduleFormComponent },
  { path: 'schedule/edit/:id', component: ScheduleTableComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
