import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { SpecialtyDrListComponent } from './specialty-dr-list/specialty-dr-list.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
import {registerLocaleData} from '@angular/common';
import { SpecialtyDrFormComponent } from './form/specialty-dr-form/specialty-dr-form.component';
import {SpecialtyDrService} from './shared/specialty-dr.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SymptomFormComponent } from './form/symptom-form/symptom-form.component';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import { ProfilComponent } from './profil/profil.component';
import { PublicationComponent } from './publication/publication.component';
import { CommentComponent } from './comment/comment.component';
registerLocaleData(localeFr);



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SpecialtyDrListComponent,
    SpecialtyDrFormComponent,
    SymptomFormComponent,
    ProfilComponent,
    PublicationComponent,
    CommentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}, SpecialtyDrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
