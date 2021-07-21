import { Component, OnInit } from '@angular/core';
import {Symptom} from '../../model/symptom';
import {SymptomService} from '../../shared/symptom.service';

@Component({
  selector: 'app-symptom-form',
  templateUrl: './symptom-form.component.html',
  styleUrls: ['./symptom-form.component.css']
})
export class SymptomFormComponent implements OnInit {

  symptoms: Symptom[];
  symptomsZone: any[];
  symptom = new Symptom();

  constructor(private symptomService: SymptomService ) { }

  ngOnInit(): void {
    this.symptomService.getZone().subscribe(
      (data: any[]) => {
        this.symptomsZone = data;
      }
    );
  }

  addSymptom() {
  }
}
