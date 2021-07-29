import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FileMedicalExamService} from '../../../shared/file-medical-exam.service';
import {FileMedicalExam} from '../../../model/fileMedicalExam';
import {MedicalExam} from "../../../model/medicalExam";
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'app-file-medical-exam-form',
  templateUrl: './file-medical-exam-form.component.html',
  styleUrls: ['./file-medical-exam-form.component.css']
})
export class FileMedicalExamFormComponent implements OnInit {
fileMedicalExam = new FileMedicalExam();
medicalExam = new MedicalExam();
  @Input() addModeChild: boolean;
  @Input() fileMedicalExam1: FileMedicalExam;
  @Output() addEvent = new EventEmitter<FileMedicalExam>();
  @Output() editEvent = new EventEmitter<FileMedicalExam>();
  constructor(private fileMedicalExamService: FileMedicalExamService, private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.medicalExam.id = this.router.snapshot.params.idCons;
    if (this.addModeChild){
      this.fileMedicalExam = new FileMedicalExam();
    }
  }

  sendAddNotif(){
    let me = new MedicalExam();
    me = this.medicalExam
    this.fileMedicalExam.medicalExam = me ;
    this.addEvent.emit(this.fileMedicalExam);
  }
  sendEditNotif() {
    this.editEvent.emit(this.fileMedicalExam);
  }
}
