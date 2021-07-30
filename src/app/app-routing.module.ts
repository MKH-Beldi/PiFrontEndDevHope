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
import { MedicalExamFormComponent } from './component/form/medical-exam-form/medical-exam-form.component';
import { UserRegisterFormComponent } from './component/form/user-register-form/user-register-form.component';
import { SigninComponent } from './component/signin/signin.component';
import { ScheduleFormComponent } from './component/form/schedule-form/schedule-form.component';
import {AuthGuardService} from './shared/auth-guard.service';
import {NotFoundComponent} from './component/not-found/not-found.component';
import {HomeComponent} from './component/home/home.component';
import {DrSingleComponent} from "./component/dr-single/dr-single.component";
import {DrListComponent} from "./component/dr-list/dr-list.component";
import {ConsultationComponent} from "./component/consultation/consultation.component";
import {ListProfileComponent} from "./component/list-profile/list-profile.component";
import {CertificatViewComponent} from "./component/certificat-view/certificat-view.component";




const routes: Routes = [
  { path: '', component: DrListComponent },
  {path: 'profile' , canActivate: [AuthGuardService], component: ProfilComponent},
  { path: 'consultation/view/:id' , canActivate: [AuthGuardService], component: ConsultationComponent },
  { path: 'consultation/table' , canActivate: [AuthGuardService], component: ConsultationTableComponent },
  { path: 'consultation/add' , canActivate: [AuthGuardService], component: ConsultationFormComponent },
  { path: 'consultation/edit/:id', canActivate: [AuthGuardService], component: ConsultationFormComponent },
  { path: 'symptom/table', canActivate: [AuthGuardService], component: SymptomTableComponent },
  { path: 'symptom/list', canActivate: [AuthGuardService], component: SymptomListComponent },
  { path: 'symptom/add', canActivate: [AuthGuardService], component: SymptomFormComponent },
  { path: 'symptom/list/:idCons', canActivate: [AuthGuardService], component: SymptomListComponent },
  { path: 'publication/add/:userId', canActivate: [AuthGuardService], component: AddPublicationComponent },
  { path: 'publication/list/:userId', canActivate: [AuthGuardService], component: ListPublicationComponent },
  { path: 'publication/list', canActivate: [AuthGuardService], component: ListPublicationComponent },
  { path: 'comment/list/:pubId', canActivate: [AuthGuardService], component: CommentComponent },
  { path: 'certificat/table', canActivate: [AuthGuardService], component: CertificatListComponent },
  { path: 'medicalExam/table/:idCons', canActivate: [AuthGuardService], component: MedicalExamListComponent },
  { path: 'medicalExam/add/:idCons', canActivate: [AuthGuardService], component: MedicalExamFormComponent },
  { path: 'fileMedicalExam/table', canActivate: [AuthGuardService], component: FileMedicalExamListComponent },
  { path: 'user/add', component: UserRegisterFormComponent },
  { path: 'auth/signin', component: SigninComponent },
  { path: 'medicalExamView/:id', canActivate: [AuthGuardService], component: MedicalExamViewComponent },
  { path: 'schedule/list/:drId', canActivate: [AuthGuardService], component: ScheduleComponent },
  { path: 'schedule/list', canActivate: [AuthGuardService], component: ScheduleComponent },
  { path: 'schedule/add', canActivate: [AuthGuardService], component: ScheduleFormComponent },
  { path: 'schedule/edit/:id', canActivate: [AuthGuardService], component: ScheduleTableComponent },
  { path: 'profile/list', canActivate: [AuthGuardService], component: ListProfileComponent},
  { path: 'fileMedicalExam/table/:idCons', canActivate: [AuthGuardService], component: FileMedicalExamListComponent },
  { path: 'certificat/table/:id', canActivate: [AuthGuardService], component: CertificatListComponent },
  { path: 'certificatView/:id', canActivate: [AuthGuardService], component: CertificatViewComponent },
  { path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
