import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ConsultationFormComponent} from './component/form/consultation-form/consultation-form.component';
import {ConsultationTableComponent} from './component/table/consultation-table/consultation-table.component';
import {SymptomTableComponent} from './component/table/symptom-table/symptom-table.component';
import {SymptomListComponent} from './component/symptom-list/symptom-list.component';
import {SymptomFormComponent} from './component/form/symptom-form/symptom-form.component';
import {ScheduleComponent} from "./component/schedule/schedule.component";
import {ScheduleFormComponent} from "./component/form/schedule-form/schedule-form.component";


const routes: Routes = [
  { path: 'consultation/table', component: ConsultationTableComponent },
  { path: 'consultation/add', component: ConsultationFormComponent },
  { path: 'consultation/edit/:id', component: ConsultationFormComponent },
  { path: 'symptom/table', component: SymptomTableComponent },
  { path: 'symptom/list', component: SymptomListComponent },
  { path: 'symptom/add', component: SymptomFormComponent },
  { path: 'schedule/add', component: ScheduleComponent },
  { path: 'schedule/addEvent', component: ScheduleFormComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
