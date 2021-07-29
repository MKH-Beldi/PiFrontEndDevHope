import { Component , OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';
import {ActivatedRoute} from "@angular/router";
import {CertificatService} from "../../shared/certificat.service";
import {FileMedicalExam} from "../../model/fileMedicalExam";
import {Certificat} from "../../model/certificat";
import {User} from "../../model/user";
import {Schedule} from "../../model/schedule";
import {ScheduleService} from "../../shared/schedule.service";
import {Consultation} from "../../model/consultation";

@Component({
  selector: 'app-certificat-view',
  templateUrl: './certificat-view.component.html',
  styleUrls: ['./certificat-view.component.css']
})
export class CertificatViewComponent implements OnInit {
  title = 'html-to-pdf';
  consultation = new Consultation();
  sch = new Schedule();
  schedules: Schedule[];
  certificats: Certificat[];
  certif=  new Certificat();
  userDr = new User();
  userPatient = new User();

  id: string;
  idc: number;
  constructor(private activatedRoute: ActivatedRoute, private certificatService: CertificatService,
              private scheduleService: ScheduleService) {
  }
  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params.id;
    this.certificatService.getBy('id', this.id).subscribe(
      (data: Certificat[]) => {
        this.certificats = data;
        this.certif = data[0];
        this.idc = this.certif.consultation.id;
        this.scheduleService.getBy('consultation', this.idc).subscribe(
          (s: Schedule[]) => {
            this.schedules = s;
            this.sch = s[0];
            this.userDr = this.sch.userDr;
            this.userPatient = this.sch.userPatient;
            console.log(this.sch);
          }
        ) ;
      } ,
      (err) => {console.log(err); }
    );
  }
  generatePDF() {

    var element = document.getElementById('table');
    var opt = {
      margin: 1,
      filename: 'myfile.pdf',
      image: {type: 'jpeg', quality: 0.98},
      html2canvas: {scale: 2},
      jsPDF: {unit: 'in', format: 'letter', orientation: 'portrait'}
    };
    html2pdf().from(element).set(opt).save();
  }
}
