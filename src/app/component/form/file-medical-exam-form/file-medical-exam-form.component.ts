import { Component, OnInit } from '@angular/core';
import {FileMedicalExamService} from '../../../shared/file-medical-exam.service';
import {FileMedicalExam} from '../../../model/fileMedicalExam';
import {MedicalExam} from "../../../model/medicalExam";

@Component({
  selector: 'app-file-medical-exam-form',
  templateUrl: './file-medical-exam-form.component.html',
  styleUrls: ['./file-medical-exam-form.component.css']
})
export class FileMedicalExamFormComponent implements OnInit {
fileMedicalExam = new FileMedicalExam();
medicalExam = new MedicalExam();
  constructor(private fileMedicalExamService: FileMedicalExamService) { }

  ngOnInit(): void {
  }
addFileMedicalExam(){
    this.medicalExam.id = 1;
    this.fileMedicalExam.medicalExam = this.medicalExam;
    this.fileMedicalExamService.addFileMedicalExam(this.fileMedicalExam).subscribe();
  }
}
