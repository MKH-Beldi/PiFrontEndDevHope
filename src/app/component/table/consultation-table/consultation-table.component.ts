import { Component, OnInit } from '@angular/core';
import {Consultation} from '../../../model/consultation';
import {ConsultationService} from '../../../shared/consultation.service';
import {NotificationService} from '../../../shared/notification.service';
import {ScheduleService} from '../../../shared/schedule.service';
import {Schedule} from '../../../model/schedule';
import {User} from "../../../model/user";
import {AuthService} from '../../../shared/auth.service';

@Component({
  selector: 'app-consultation-table',
  templateUrl: './consultation-table.component.html',
  styleUrls: ['./consultation-table.component.css']
})
export class ConsultationTableComponent implements OnInit {

  searchValue: string;
  consultations: Consultation[];
  filtreName: string;
  filtreValue: string;
  totalData: number;
  config: any;
  addMode: boolean;
  viewForm: boolean;
  user = new User();
  status: any[];

  constructor(private loginService: AuthService, private consultationService: ConsultationService, private notifyService: NotificationService, private scheduleService: ScheduleService) { }

  ngOnInit(): void {
    this.loginService.getUser().subscribe(
      (data: User) => {
        this.user = data;
      }
    );
    this.consultationService.getAll().subscribe(
      (data: Consultation[]) => {
        this.consultations = data;
        this.totalData = data.length;
      }
    );
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalData
    };
  }


  deleteConsultation(c: Consultation){
    this.scheduleService.deleteSchedule(c.schedules[0].id).subscribe(
      () => {
        this.consultationService.deleteConsultation(c.id).subscribe(
          (status) => {
            if (status.status === 201 ){
              const indexDelete = this.consultations.indexOf(c);
              this.consultations.splice(indexDelete, 1);
              this.notifyService.showError('Consultation supprimer avec succès !', 'Delete');
            }
          }
        );
      }
    );
  }

  getFiltreName(by: string){
    this.filtreName = by;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

  getStyle(consultation: Consultation){
    switch (consultation.status) {
      case 'en attente de consultation': {
        return 'table-danger';
        break;
      }
      case 'en cours de traitement': {
        return 'table-primary';
        break;
      }
      case 'en attente d\'examen ': {
        return 'table-warning';
        break;
      }
      case 'en attente de contrôle': {
        return 'table-light';
        break;
      }
      case 'patient s\'est rétabli': {
        return 'table-success';
        break;
      }
      default: {
        return '';
        break;
      }
    }

  }

}
