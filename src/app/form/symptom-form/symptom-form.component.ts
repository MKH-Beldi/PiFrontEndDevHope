import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
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
  @Input() addModeChild: boolean;
  @Input() symptom: Symptom;
  @Output() addEvent = new EventEmitter<Symptom>();
  @Output() editEvent = new EventEmitter<Symptom>();

  constructor(private symptomService: SymptomService) { }

  ngOnInit(): void {
    if (this.addModeChild){
      this.symptom = new Symptom();
    }
    this.symptomService.getZone().subscribe(
      (data: any[]) => {
        this.symptomsZone = data;
      }
    );
  }

  sendAddNotif() {
    this.addEvent.emit(this.symptom);
  }

  sendEditNotif() {
    this.editEvent.emit(this.symptom);
  }
}
