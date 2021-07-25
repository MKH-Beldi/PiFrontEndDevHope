import { Component, OnInit } from '@angular/core';
import {MedicalExamService} from "../../shared/medical-exam.service";
import {MedicalExam} from '../../model/medicalExam';
import {FileMedicalExamService} from "../../shared/file-medical-exam.service";

@Component({
  selector: 'app-medical-exam-list',
  templateUrl: './medical-exam-list.component.html',
  styleUrls: ['./medical-exam-list.component.css']
})
export class MedicalExamListComponent implements OnInit {
  viewForm: boolean;
  addMode: boolean;
  medicalExams: MedicalExam[];
  config: any;
  medicalExam: MedicalExam;
  totalData: any;
  constructor(private medicalExamService: MedicalExamService,
              private fileMedicalExamService: FileMedicalExamService) { }

  ngOnInit(): void {
    this.viewForm = false ;
    this.medicalExamService.getAll().subscribe(
      (data: MedicalExam[]) => {
        this.medicalExams = data;
        this.totalData = data.length;
      }
    );
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.totalData
    };
  }

  sendEdit(me:MedicalExam){

  }
  deleteMedicalExam(me: MedicalExam){
   // this.fileMedicalExamService.deleteMedicalExam(me.id);
    this.medicalExamService.deleteMedicalExam(me.id).subscribe(
        (status) => {
          if (status.status === 404 ){
            const indexDelete = this.medicalExams.indexOf(me);
            this.medicalExams.splice(indexDelete, 1);
          }
        }
      );
    }

  pageChanged(event){
    console.log('next');
    this.config.currentPage = event;
  }
}
