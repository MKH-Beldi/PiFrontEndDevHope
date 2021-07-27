import { Component, OnInit } from '@angular/core';
import {MedicalExam} from '../../../model/medicalExam';
import {MedicalExamService} from '../../../shared/medical-exam.service';
import {Consultation} from '../../../model/consultation';
import {User} from '../../../model/user';

@Component({
  selector: 'app-medical-exam-form',
  templateUrl: './medical-exam-form.component.html',
  styleUrls: ['./medical-exam-form.component.css']
})
export class MedicalExamFormComponent implements OnInit {
medicalExam = new MedicalExam();
consultation = new Consultation();
user = new User();
  constructor(private medicalExamService: MedicalExamService) { }

  ngOnInit(): void {
  }
  addMedicalExam(){
    this.user.id = 1;
    this.medicalExam.userLab = this.user;
   this.consultation.id = 1;
   this.medicalExam.consultation = this.consultation;

    this.medicalExamService.addMedicalExam(this.medicalExam).subscribe();
  }
}
