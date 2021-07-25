import { Component, OnInit } from '@angular/core';
import {SymptomService} from '../../../shared/symptom.service';
import {NotificationService} from '../../../shared/notification.service';
import {Symptom} from '../../../model/symptom';

@Component({
  selector: 'app-symptom-table',
  templateUrl: './symptom-table.component.html',
  styleUrls: ['./symptom-table.component.css']
})
export class SymptomTableComponent implements OnInit {

  symptomToEdit: Symptom;
  symptoms: Symptom[];
  searchValue: string;
  symptomsZoneSelect: any[];
  filtreName: string;
  filtreValue: string;
  config: any;
  totalData: any;
  addMode: boolean;
  viewForm: boolean;


  constructor(private symptomService: SymptomService, private notifyService: NotificationService) {}

  ngOnInit(): void {
    this.viewForm = false ;
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

  addSymptom(symptom: Symptom) {
    this.viewForm = true;
    symptom.createdAt = new Date();
    symptom.createdAt.setHours(symptom.createdAt.getHours() - 1);
    this.symptomService.addSymptom(symptom).subscribe(
      (data: any[]) => {
        if (data[0]){
          symptom.id = data[0];
          this.symptoms.push(symptom);
          this.notifyService.showSuccess('Symptôme ajouté avec succès !', 'Ajout');
          this.viewForm = false;
        }
      }
    );
  }

  sendEdit(s: Symptom) {
    this.viewForm = true;
    this.addMode = false;
    this.symptomToEdit = s;
  }

  editSymptom(s: Symptom) {
    this.viewForm = true;
    this.addMode = false;
    this.symptomToEdit.updatedAt = new Date();
    this.symptomToEdit.updatedAt.setHours(this.symptomToEdit.updatedAt.getHours() - 1);
    this.symptomService.updateSymptom(s.id, this.symptomToEdit).subscribe(
      (status) => {
        if (status.status === 201 ){
          const indexEdit = this.symptoms.indexOf(s);
          this.symptoms[indexEdit] = s;
          this.notifyService.showInfo('Symptôme modifié avec succès !', 'Modification');
          this.viewForm = false;
        }
      }
    );
  }

  deleteSymptom(s: Symptom){
    this.symptomService.deleteSymptom(s.id).subscribe(
      (status) => {
        if (status.status === 201 ){
          const indexDelete = this.symptoms.indexOf(s);
          this.symptoms.splice(indexDelete, 1);
          this.notifyService.showError('Symptôme supprimer avec succès !', 'Delete');
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
