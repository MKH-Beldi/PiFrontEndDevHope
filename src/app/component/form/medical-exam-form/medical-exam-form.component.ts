import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MedicalExam} from '../../../model/medicalExam';
import {MedicalExamService} from '../../../shared/medical-exam.service';
import {Consultation} from '../../../model/consultation';
import {User} from '../../../model/user';
import {Certificat} from "../../../model/certificat";
import {ActivatedRoute} from "@angular/router";
import {FileMedicalExam} from "../../../model/fileMedicalExam";
import {FileMedicalExamService} from "../../../shared/file-medical-exam.service";

@Component({
  selector: 'app-medical-exam-form',
  templateUrl: './medical-exam-form.component.html',
  styleUrls: ['./medical-exam-form.component.css']
})
export class MedicalExamFormComponent implements OnInit {
  medicalExam = new MedicalExam();
  consultation = new Consultation();
  idCons: string;
  userLab = new User();
  user = new User();
  isAddMode: Boolean ;
  @Input() addModeChild: boolean;
  @Input() medicalExam1: MedicalExam;
  @Output() editEvent = new EventEmitter<MedicalExam>();
  @Output() addEvent = new EventEmitter<MedicalExam>();

  constructor(private medicalExamService: MedicalExamService, private activatedRoute: ActivatedRoute, private fileMedicalExamService: FileMedicalExamService) { }

  ngOnInit(): void {
    this.idCons = this.activatedRoute.snapshot.params.idCons;
    if (this.addModeChild){
      this.medicalExam = new MedicalExam();
    }
    else {
      this.medicalExam = this.medicalExam1;
    }
  }


  sendAddNotif(){
    let consultation = new Consultation();
    consultation.id = +this.idCons;
    this.medicalExam.consultation = consultation;
    this.addEvent.emit(this.medicalExam);
  }

  sendEditNotif() {

    this.editEvent.emit(this.medicalExam1);
  }

}
