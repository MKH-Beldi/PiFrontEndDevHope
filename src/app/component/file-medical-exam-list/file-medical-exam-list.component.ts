import { Component, OnInit } from '@angular/core';
import {FileMedicalExam} from '../../model/fileMedicalExam';
import {FileMedicalExamService} from '../../shared/file-medical-exam.service';
import {MedicalExam} from '../../model/medicalExam';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-file-medical-exam-list',
  templateUrl: './file-medical-exam-list.component.html',
  styleUrls: ['./file-medical-exam-list.component.css']
})
export class FileMedicalExamListComponent implements OnInit {
  fileMedicalExamToEdit: FileMedicalExam;
  fileMedicalExamZoneSelect: any[];
  filtreName: string;
  filtreValue: string;
  viewForm: boolean;
  addMode: boolean;
  fileMedicalExams: FileMedicalExam[];
  config: any;
  fileMedicalExam: FileMedicalExam;
  totalData: any;
  searchValue: string;
  medicalExam: MedicalExam;
  constructor(private fileMedicalExamService: FileMedicalExamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.viewForm = false ;
    this.fileMedicalExamService.getAll().subscribe(
      (data: FileMedicalExam[]) => {
        this.fileMedicalExams = data;
        this.fileMedicalExamZoneSelect = this.fileMedicalExams.map(
          o => o.title).filter((value, index, self) => self.indexOf(value) === index);
        this.totalData = data.length;
      }
    );
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.totalData
    };
  }
  pageChanged(event){
    console.log('next');
    this.config.currentPage = event;
  }
  deleteFileMedicalExam(fme:FileMedicalExam) {
    this.fileMedicalExamService.deleteFileMedicalExam(fme.id).subscribe(
      (data: FileMedicalExam[]) => {
        const indexDelete = this.fileMedicalExams.indexOf(fme);
        this.fileMedicalExams.splice(indexDelete, 1);
      }
    );

  }


  sendEdit(fme:FileMedicalExam){

  }
  getFiltreName(by: string){
    this.filtreName = by;
  }
  editFileMedicalExam(fme:FileMedicalExam){

  }
  addFileMedicalExam(fme:FileMedicalExam){
    fme.urlFile = 'aaaa';
    console.log(fme);
    this.fileMedicalExamService.addFileMedicalExam(fme).subscribe(
      (data: any[]) => {
        if (data[0]){
          this.fileMedicalExams.push(fme);
          this.viewForm = false;
        }
      }
    );
    this.ngOnInit();
  }

}
