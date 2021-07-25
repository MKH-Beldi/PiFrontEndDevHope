import { Component, OnInit } from '@angular/core';
import {Symptom} from '../../model/symptom';
import {SymptomService} from '../../shared/symptom.service';


@Component({
  selector: 'app-symptom-list',
  templateUrl: './symptom-list.component.html',
  styleUrls: ['./symptom-list.component.css']
})
export class SymptomListComponent implements OnInit {

  symptomsZone: any[];
  symptomsSelect: any[];
  symptomsSelected: Symptom[];
  symptomsZoneSelected;

  constructor(private symptomService: SymptomService) { }

  ngOnInit(): void {
    this.symptomService.getZone().subscribe(
      (data: Symptom[]) => {
        this.symptomsZone = data;
      }
    );
  }

  onSelectZone(){
    this.symptomService.getBy('name', this.symptomsZoneSelected).subscribe(
      (data: Symptom[]) => {
        this.symptomsSelect = data;
      }
    );
  }

  getSelectedValue(){
    console.log(this.symptomsSelected);
  }


}
