import { Component, OnInit } from '@angular/core';
import {Consultation} from '../../../model/consultation';
import {ConsultationService} from '../../../shared/consultation.service';
import {NotificationService} from '../../../shared/notification.service';

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
  status: any[];

  constructor(private consultationService: ConsultationService, private notifyService: NotificationService) { }

  ngOnInit(): void {
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
    this.consultationService.deleteSymptom(c.id).subscribe(
      (status) => {
        if (status.status === 201 ){
          const indexDelete = this.consultations.indexOf(c);
          this.consultations.splice(indexDelete, 1);
          this.notifyService.showError('Consultation supprimer avec succès !', 'Delete');
        }
      }
    );
  }

  getFiltreName(by: string){
    this.filtreName = by;
  }

  pageChanged(event){
    this.config.currentPage = event;
  }

}
