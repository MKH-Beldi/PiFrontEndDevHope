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
registerLocaleData(localeFr);
import { ScheduleModule } from '@syncfusion/ej2-angular-schedule';

import { DayService, WeekService, WorkWeekService, MonthService, AgendaService, MonthAgendaService} from '@syncfusion/ej2-angular-schedule';
import { ScheduleComponent } from './schedule/schedule.component';



@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    SpecialtyDrListComponent,
    SpecialtyDrFormComponent,
    ScheduleComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ScheduleModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR'}, SpecialtyDrService, DayService, WeekService, WorkWeekService, MonthService, AgendaService],
  bootstrap: [AppComponent]
})
export class AppModule { }
