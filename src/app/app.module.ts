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
import { ToastrModule } from 'ngx-toastr';
import { SymptomListComponent } from './symptom-list/symptom-list.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SymptomTableComponent } from './table/symptom-table/symptom-table.component';
import { SearchFilterPipe } from './pipe/search-filter.pipe';
import { SortDirective } from './directive/sort.directive';
import { NgxPaginationModule } from 'ngx-pagination';
registerLocaleData(localeFr);



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SpecialtyDrListComponent,
    SpecialtyDrFormComponent,
    SymptomFormComponent,
    SymptomListComponent,
    SymptomTableComponent,
    SearchFilterPipe,
    SortDirective

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
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}, SpecialtyDrService],
  bootstrap: [AppComponent]
})
export class AppModule { }
