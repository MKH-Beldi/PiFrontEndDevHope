import { Component, OnInit } from '@angular/core';
import {CertificatService} from '../../shared/certificat.service';
import {Certificat} from '../../model/certificat';
@Component({
  selector: 'app-certificat-list',
  templateUrl: './certificat-list.component.html',
  styleUrls: ['./certificat-list.component.css']
})
export class CertificatListComponent implements OnInit {
  certificatToEdit: Certificat;
  certificats: Certificat[];
  searchValue: string;
  certificatsZoneSelect: any[];
  filtreName: string;
  filtreValue: string;
  config: any;
  totalData: any;
  addMode: boolean;
  viewForm: boolean;

  constructor(private certificatService: CertificatService) { }

  ngOnInit(): void{
    this.viewForm = false ;
    this.certificatService.getAll().subscribe(
      (data: Certificat[]) => {
        this.certificats = data;
        this.totalData = data.length;
      }
    );
    this.config = {
      itemsPerPage: 10,
      currentPage: 1,
      totalItems: this.totalData
    };
  }
  deleteCertificat(c:Certificat){
    this.certificatService.deleteCertificat(c.id).subscribe(
      (status) => {
        if (status.status === 201 ){
          const indexDelete = this.certificats.indexOf(c);
          this.certificats.splice(indexDelete, 1);
        }
      }
    );
  }
  editCertificat(c:Certificat){
    console.log("aaaa");
    this.certificatToEdit = new Certificat();
    this.viewForm = true;
    this.addMode = false;
    this.certificatToEdit.updatedAt = new Date();
    this.certificatToEdit.updatedAt.setHours(this.certificatToEdit.updatedAt.getHours() - 1);
    this.certificatService.updateCertificat(c.id, this.certificatToEdit).subscribe(
      (status) => {
        if (status.status === 201 ){
          const indexEdit = this.certificats.indexOf(c);
          this.certificats[indexEdit] = c;
          this.viewForm = false;
        }
      }
    );
  }
  pageChanged(event){
    console.log('next');
    this.config.currentPage = event;
  }
  addCerificat(c: Certificat){
console.log("aywah");
// this.d = this.certificat.startDate;
    // this.d2 = this.datePipe.transform(this.d, 'yyyy-MM-dd');
    // this.d3 = new Date(this.d2).getTime();
    // this.nbr = this.certificat.nbrRestDay;
//  this.d4 = this.d3 + (this.nbr * 86400000);
//  this.df = this.datePipe.transform(this.d4, 'yyyy-MM-dd');
    // console.log(this.df);
//  console.log(this.d4);
     //c.endDate = c.df;
     this.certificatService.addCertificat(c).subscribe(
       (data: any[]) => {
         if (data[0]){
           this.certificats.push(c);
           this.viewForm = false;
         }
       }
     );
     this.ngOnInit();
  }
  sendEdit(c: Certificat) {
    this.viewForm = true;
    this.addMode = false;
    this.certificatToEdit = c;
  }
}
