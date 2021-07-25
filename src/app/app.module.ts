import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData , DatePipe } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CertificatFormComponent } from './component/form/certificat-form/certificat-form.component';
import { MedicalExamFormComponent } from './component/form/medical-exam-form/medical-exam-form.component';
import { FileMedicalExamFormComponent } from './component/form/file-medical-exam-form/file-medical-exam-form.component';
import { CertificatViewComponent } from './component/view/certificat-view/certificat-view.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { MedicalExamListComponent } from './component/medical-exam-list/medical-exam-list.component';
registerLocaleData(localeFr);


@NgModule({
  declarations: [
    AppComponent,
    CertificatFormComponent,
    MedicalExamFormComponent,
    FileMedicalExamFormComponent,
    CertificatViewComponent,
    MedicalExamListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    NgxPaginationModule
  ],
  providers: [DatePipe, { provide: LOCALE_ID, useValue: 'fr-FR'}],
  bootstrap: [AppComponent]
})
export class AppModule { }
