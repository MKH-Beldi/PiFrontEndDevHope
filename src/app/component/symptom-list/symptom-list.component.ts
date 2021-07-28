import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Symptom} from '../../model/symptom';
import {SymptomService} from '../../shared/symptom.service';
import {Consultation} from "../../model/consultation";
import {ConsultationService} from "../../shared/consultation.service";
import {ActivatedRoute, Router} from "@angular/router";


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
  @Output() sendSymptoms = new EventEmitter<Symptom[]>();
  idCons: number;
  consultation = new Consultation();

  constructor(private consultationService: ConsultationService, private symptomService: SymptomService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.idCons = +this.activatedRoute.snapshot.params.idCons;
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

  sendNotifSymptoms(){
    console.log(this.symptomsSelected);
    this.sendSymptoms.emit(this.symptomsSelected);
  }

  addSympSToConsul(){
    this.consultation.id = this.idCons;
    this.consultation.symptoms = this.symptomsSelected;
    this.consultationService.updateConsultation(this.idCons, this.consultation).subscribe(
      () => {
        this.router.navigate(['/consultation/table']);
      }
    );
  }

}
