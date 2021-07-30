import {Component, Input, OnInit} from '@angular/core';
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
  addMode: boolean;
  viewForm: boolean;
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
  @Input() medicalExam1: MedicalExam;

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
    this.viewForm = false ;
    this.config = {
      itemsPerPage: 8,
      currentPage: 1,
      totalItems: this.totalData
    };
  }
  editMedicalExam(me: MedicalExam){
    console.log(this.medicalExam1);
    this.medicalExamService.updateMedicalExam(me.id, me).subscribe(
      () => {
        this.viewForm = false;
      }

    );
  }
  editEvent(me:MedicalExam){
    console.log(me);
    this.viewForm = true;
    this.medicalExamToEdit = me;
    this.addMode = false;

  }
  addMedicalExam(medicalExam: MedicalExam){
    medicalExam.userLab = this.userLab;
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
