import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {MedicalExam} from '../../../model/medicalExam';
import {MedicalExamService} from '../../../shared/medical-exam.service';
import {Consultation} from '../../../model/consultation';
import {User} from '../../../model/user';
import {Certificat} from "../../../model/certificat";

@Component({
  selector: 'app-medical-exam-form',
  templateUrl: './medical-exam-form.component.html',
  styleUrls: ['./medical-exam-form.component.css']
})
export class MedicalExamFormComponent implements OnInit {
medicalExam = new MedicalExam();
consultation = new Consultation();
user = new User();
  @Input() addModeChild: boolean;
  @Input() medicalExam1: MedicalExam;
  @Output() addEvent = new EventEmitter<MedicalExam>();
  @Output() editEvent = new EventEmitter<MedicalExam>();
  constructor(private medicalExamService: MedicalExamService) { }

  ngOnInit(): void {
    if (this.addModeChild){
      this.medicalExam = new MedicalExam();
    }
  }
  sendAddNotif(){
    console.log("khra");
    this.addEvent.emit(this.medicalExam);
  }
  sendEditNotif() {
    this.editEvent.emit(this.medicalExam);
  }
}
