import { Component, OnInit } from '@angular/core';
import {SymptomService} from '../../shared/symptom.service';
import {Symptom} from '../../model/symptom';

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


  constructor(private symptomService: SymptomService) { }

  ngOnInit(): void {
    this.symptomService.getAll().subscribe(
      (data: Symptom[]) => {
        this.symptoms = data;
        this.symptomsZoneSelect = this.symptoms.map(
          o => o.name).filter((value, index, self) => self.indexOf(value) === index);
      }
    );
  }

  getFiltreName(by: string){
    this.filtreName = by;
  }
}
