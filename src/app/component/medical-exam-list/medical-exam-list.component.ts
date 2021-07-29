import { Component, OnInit } from '@angular/core';
import {MedicalExamService} from "../../shared/medical-exam.service";
import {MedicalExam} from '../../model/medicalExam';
import {FileMedicalExamService} from "../../shared/file-medical-exam.service";
import {Certificat} from "../../model/certificat";
import {User} from "../../model/user";
import {Consultation} from "../../model/consultation";
import {FileMedicalExam} from "../../model/fileMedicalExam";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-medical-exam-list',
  templateUrl: './medical-exam-list.component.html',
  styleUrls: ['./medical-exam-list.component.css']
})
export class MedicalExamListComponent implements OnInit {
  medicalExamToEdit: MedicalExam;
  viewForm: boolean;
  addMode: boolean;
  medicalExams: MedicalExam[];
  fileMedicalExams: FileMedicalExam[];
  config: any;
  medicalExam: MedicalExam;
  totalData: any;
  userLab: User;
  consultation: Consultation;
  d: any;
  idCons: string;
  user = new User();
  constructor(private medicalExamService: MedicalExamService,
              private fileMedicalExamService: FileMedicalExamService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.medicalExam=new MedicalExam();
    this.viewForm = false ;
    this.idCons = this.route.snapshot.params.idCons;
    this.medicalExamService.getBy('consultation', this.idCons).subscribe(
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
  editMedicalExam(medicalExam: MedicalExam){

  }
  sendEdit(me:MedicalExam){

  }
  addMedicalExam(medicalExam: MedicalExam){
    this.consultation= new Consultation();
    this.userLab = new User();
    this.userLab.id = 1;
    medicalExam.userLab = this.userLab;
    this.consultation.id = 1;
    medicalExam.consultation = this.consultation;

    this.medicalExamService.addMedicalExam(medicalExam).subscribe(
      (data: any[]) => {
        if (data[0]){
          this.medicalExams.push(medicalExam);
          this.viewForm = false;
        }
      }
    );
    this.ngOnInit();
  }
  deleteMedicalExam(me: MedicalExam){
     this.fileMedicalExamService.getBy('medicalExam', me.id).subscribe(
      (data: FileMedicalExam[]) => {
        this.fileMedicalExams = data;
        console.log(this.fileMedicalExams);
        if (this.fileMedicalExams[0] = null){
          this.fileMedicalExamService.deleteFileMedicalExam(this.fileMedicalExams[0].id).subscribe(
            (data: FileMedicalExam[]) => {
              const indexDelete = this.medicalExams.indexOf(me);

              this.medicalExams.splice(indexDelete, 1);

              this.medicalExamService.deleteMedicalExam(me.id).subscribe();
            }
          );
      }
        else {
          const indexDelete = this.medicalExams.indexOf(me);

          this.medicalExams.splice(indexDelete, 1);
          this.medicalExamService.deleteMedicalExam(me.id).subscribe();

        }
      }
    );
  }

  pageChanged(event){
    console.log('next');
    this.config.currentPage = event;
  }
}
