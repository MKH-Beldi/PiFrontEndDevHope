import { Component , OnInit } from '@angular/core';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
import * as jsPDF from 'jspdf';
import * as html2pdf from 'html2pdf.js';

@Component({
  selector: 'app-certificat-view',
  templateUrl: './certificat-view.component.html',
  styleUrls: ['./certificat-view.component.css']
})
export class CertificatViewComponent implements OnInit {
  title = 'html-to-pdf';


  constructor() {
  }
  ngOnInit(): void {
  }
  generatePDF() {

    var element = document.getElementById('table');
    console.log(element);
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
