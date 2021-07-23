import { Component, OnInit } from '@angular/core';
import {SymptomService} from '../../shared/symptom.service';
import {Symptom} from '../../model/symptom';
import {NotificationService} from '../../shared/notification.service';

@Component({
  selector: 'app-symptom-table',
  templateUrl: './symptom-table.component.html',
  styleUrls: ['./symptom-table.component.css']
})
export class SymptomTableComponent implements OnInit {

  symptoms: Symptom[];
  searchValue: string;
  symptomsZoneSelect: any[];
  filtreName: string;
  filtreValue: string;
  config: any;
  totalData: any;



  constructor(private symptomService: SymptomService, private notifyService: NotificationService) {}

  ngOnInit(): void {
    this.symptomService.getAll().subscribe(
      (data: Symptom[]) => {
        this.symptoms = data;
        this.symptomsZoneSelect = this.symptoms.map(
          o => o.name).filter((value, index, self) => self.indexOf(value) === index);
        this.totalData = data.length;
      }
    );
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalData
    };
  }

  deleteSymptom(s: Symptom){
    this.symptomService.deleteSymptom(s.id).subscribe(
      (status) => {
        if (status.status === 201 ){
          this.notifyService.showError('Symptôme supprimer avec succès !', 'Delete');
        }
        const idDelete = this.symptoms.indexOf(s);
        this.symptoms.splice(idDelete, 1);
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
