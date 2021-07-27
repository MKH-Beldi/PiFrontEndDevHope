import { NgModule } from '@angular/core';
import { Routes, RouterModule, ActivatedRoute} from '@angular/router';
import {ConsultationFormComponent} from './component/form/consultation-form/consultation-form.component';
import {ConsultationTableComponent} from './component/table/consultation-table/consultation-table.component';
import {SymptomTableComponent} from './component/table/symptom-table/symptom-table.component';
import {SymptomListComponent} from './component/symptom-list/symptom-list.component';
import {SymptomFormComponent} from './component/form/symptom-form/symptom-form.component';
import {CertificatViewComponent} from './component/certificat-view/certificat-view.component';
import {MedicalExamListComponent} from './component/medical-exam-list/medical-exam-list.component';
import {FileMedicalExamListComponent} from './component/file-medical-exam-list/file-medical-exam-list.component';
import {CertificatListComponent} from './component/certificat-list/certificat-list.component';
import {CertificatFormComponent} from "./component/form/certificat-form/certificat-form.component";
import {MedicalExamViewComponent} from './component/medical-exam-view/medical-exam-view.component';
import {CommonModule} from "@angular/common";


const routes: Routes = [
  { path: 'consultation/table', component: ConsultationTableComponent },
  { path: 'consultation/add', component: ConsultationFormComponent },
  { path: 'consultation/edit/:id', component: ConsultationFormComponent },
  { path: 'symptom/table', component: SymptomTableComponent },
  { path: 'symptom/list', component: SymptomListComponent },
  { path: 'symptom/add', component: SymptomFormComponent },
  { path: 'certificat/table', component: CertificatListComponent },
  { path: 'medicalExam/table', component: MedicalExamListComponent },
  { path: 'fileMedicalExam/table', component: FileMedicalExamListComponent },
  { path: 'medicalExamView/:id', component: MedicalExamViewComponent , pathMatch: 'full' }
];

@NgModule({
  imports: [CommonModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
