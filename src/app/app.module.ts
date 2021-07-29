import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import { SpecialtyDrService } from './shared/specialty-dr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { ToastrModule } from 'ngx-toastr';
import { NgSelectModule } from '@ng-select/ng-select';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { SortDirective } from './directive/sort.directive';
import { NgxPaginationModule } from 'ngx-pagination';
import { ConsultationFormComponent } from './component/form/consultation-form/consultation-form.component';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
import { ConsultationTableComponent } from './component/table/consultation-table/consultation-table.component';
import { ConsultationComponent } from './component/consultation/consultation.component';
import { SymptomTableComponent } from './component/table/symptom-table/symptom-table.component';
import { SymptomListComponent } from './component/symptom-list/symptom-list.component';
import { SymptomFormComponent } from './component/form/symptom-form/symptom-form.component';
import {SymptomService} from './shared/symptom.service';
import {ConsultationService} from './shared/consultation.service';
import {CertificatFormComponent} from './component/form/certificat-form/certificat-form.component';
import {MedicalExamFormComponent} from './component/form/medical-exam-form/medical-exam-form.component';
import {FileMedicalExamFormComponent} from './component/form/file-medical-exam-form/file-medical-exam-form.component';
import {CertificatViewComponent} from './component/certificat-view/certificat-view.component';
import {MedicalExamListComponent} from './component/medical-exam-list/medical-exam-list.component';
import { FullCalendarModule } from '@fullcalendar/angular';
import {ScheduleComponent} from './component/schedule/schedule.component';
import {ReactiveFormsModule } from '@angular/forms';
import {ScheduleFormComponent} from './component/form/schedule-form/schedule-form.component';
import {ScheduleTableComponent} from './component/table/schedule/schedule-table/schedule-table.component';
import {ProfilComponent} from './component/profil/profil.component';
import {CommentComponent} from './component/comment/comment.component';
import {PublicationComponent} from './component/publication/publication.component';
import {FooterComponent} from './component/footer/footer.component';
import {HomeComponent} from './component/home/home.component';
import {AddPublicationComponent} from './component/add-publication/add-publication.component';
import {ListPublicationComponent} from './component/list-publication/list-publication.component';
import {PublicationFormComponent} from './component/form/publication-form/publication-form.component';
import {FileMedicalExamListComponent} from './component/file-medical-exam-list/file-medical-exam-list.component';
import {CertificatListComponent} from './component/certificat-list/certificat-list.component';
import {MedicalExamViewComponent} from './component/medical-exam-view/medical-exam-view.component';
import { UserRegisterFormComponent } from './component/form/user-register-form/user-register-form.component';
import { SigninComponent } from './component/signin/signin.component';
import {BasicAuthHtppInterceptorService} from './shared/basic-auth-interceptor.service';
import {AuthService} from './shared/auth.service';
import {HeaderComponent} from './component/header/header.component';
import timeGridPlugin from '@fullcalendar/timegrid';
import interactionPlugin from '@fullcalendar/interaction';
import dayGridPlugin from '@fullcalendar/daygrid';
import {HTTP_INTERCEPTORS, HttpClientModule} from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import { NotFoundComponent } from './component/not-found/not-found.component';
import { DrSingleComponent } from './component/dr-single/dr-single.component';
import { DrListComponent } from './component/dr-list/dr-list.component';
import { ListProfileComponent } from './component/list-profile/list-profile.component';

registerLocaleData(localeFr);

FullCalendarModule.registerPlugins([
  dayGridPlugin,
  interactionPlugin,
  timeGridPlugin
]);

@NgModule({
  declarations: [
    AppComponent,
    SearchFilterPipe,
    SortDirective,
    ConsultationFormComponent,
    ConsultationTableComponent,
    ConsultationComponent,
    SymptomTableComponent,
    SymptomListComponent,
    SymptomFormComponent,
    CertificatFormComponent,
    MedicalExamFormComponent,
    FileMedicalExamFormComponent,
    CertificatViewComponent,
    MedicalExamListComponent,
    ScheduleComponent,
    ScheduleFormComponent,
    ScheduleTableComponent,
    ProfilComponent,
    CommentComponent,
    PublicationComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    AddPublicationComponent,
    ListPublicationComponent,
    PublicationFormComponent,
    FileMedicalExamListComponent,
    CertificatListComponent,
    MedicalExamViewComponent,
    UserRegisterFormComponent,
    SigninComponent,
    NotFoundComponent,
    DrSingleComponent,
    DrListComponent,
    ListProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule,
    ToastrModule.forRoot(),
    NgSelectModule,
    NgxPaginationModule,
    CKEditorModule,
    ReactiveFormsModule,
    FullCalendarModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}, { provide: HTTP_INTERCEPTORS, useClass: BasicAuthHtppInterceptorService, multi: true}, SpecialtyDrService, ConsultationService, SymptomService, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
