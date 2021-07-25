import { BrowserModule } from '@angular/platform-browser';
import {LOCALE_ID, NgModule} from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { SpecialtyDrListComponent } from './component/specialty-dr-list/specialty-dr-list.component';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import localeFr from '@angular/common/locales/fr';
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
import { HeaderComponent } from './component/header/header.component';
import { SymptomTableComponent } from './component/table/symptom-table/symptom-table.component';
import { SymptomListComponent } from './component/symptom-list/symptom-list.component';
import { SymptomFormComponent } from './component/form/symptom-form/symptom-form.component';
import {SymptomService} from './shared/symptom.service';
import {ConsultationService} from './shared/consultation.service';
registerLocaleData(localeFr);



@NgModule({
  declarations: [
    AppComponent,
    SpecialtyDrListComponent,
    SearchFilterPipe,
    SortDirective,
    ConsultationFormComponent,
    ConsultationTableComponent,
    ConsultationComponent,
    HeaderComponent,
    SymptomTableComponent,
    SymptomListComponent,
    SymptomFormComponent

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
    CKEditorModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}, SpecialtyDrService, SymptomService, ConsultationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
