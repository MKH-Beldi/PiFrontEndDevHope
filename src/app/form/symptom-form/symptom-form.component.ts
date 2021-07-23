import { Component, OnInit } from '@angular/core';
import {Symptom} from '../../model/symptom';
import {SymptomService} from '../../shared/symptom.service';
import {NotificationService} from "../../shared/notification.service";
import {SpecialtyDr} from "../../model/specialtyDr";

@Component({
  selector: 'app-symptom-form',
  templateUrl: './symptom-form.component.html',
  styleUrls: ['./symptom-form.component.css']
})
export class SymptomFormComponent implements OnInit {

  symptoms: Symptom[];
  symptomsZone: any[];
  symptom = new Symptom();

  constructor(private symptomService: SymptomService, private notifyService: NotificationService ) { }

  ngOnInit(): void {
    this.symptomService.getZone().subscribe(
      (data: any[]) => {
        this.symptomsZone = data;
      }
    );
  }

  addSymptom() {
    this.symptomService.addSymptom(this.symptom).subscribe(
      (status) => {
        if (status.status === 201 ){
          this.notifyService.showSuccess('Symptôme ajouté avec succès !', 'Ajout');
        }
      }
    );
  }
}
