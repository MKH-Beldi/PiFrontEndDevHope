import { Component, OnInit } from '@angular/core';
import {Certificat} from '../../../model/certificat';
import {CertificatService} from '../../../shared/certificat.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-certificat-form',
  templateUrl: './certificat-form.component.html',
  styleUrls: ['./certificat-form.component.css']
})
export class CertificatFormComponent implements OnInit {
 certificat = new Certificat() ;
d: DatePipe ;
d2: DatePipe;
d3: Date;
d4: Date;
df: Date;
nbr: number;
constructor(private certificatService: CertificatService , private datePipe: DatePipe) { }

  ngOnInit(): void {
  }
  addCertificat(){
 // this.d = this.certificat.startDate;
 // this.d2 = this.datePipe.transform(this.d, 'yyyy-MM-dd');
 // this.d3 = new Date(this.d2).getTime();
  // this.nbr = this.certificat.nbrRestDay;
//  this.d4 = this.d3 + (this.nbr * 86400000);
//  this.df = this.datePipe.transform(this.d4, 'yyyy-MM-dd');
 // console.log(this.df);
//  console.log(this.d4);
 // this.certificat.endDate = this.df;
  this.certificatService.addCertificat(this.certificat).subscribe();
  }

}
