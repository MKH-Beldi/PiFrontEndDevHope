import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Certificat} from '../../../model/certificat';
import {CertificatService} from '../../../shared/certificat.service';
import {DatePipe} from '@angular/common';

@Component({
  selector: 'app-certificat-form',
  templateUrl: './certificat-form.component.html',
  styleUrls: ['./certificat-form.component.css']
})
export class CertificatFormComponent implements OnInit {
  certificat = new Certificat();
  d: DatePipe;
  d2: DatePipe;
  d3: Date;
  d4: Date;
  df: Date;
  nbr: number;
  certificatsZone: any[];
  @Input() addModeChild: boolean;
  @Input() certificat1: Certificat;
  @Output() addEvent = new EventEmitter<Certificat>();
  @Output() editEvent = new EventEmitter<Certificat>();

  constructor(private certificatService: CertificatService) {
  }

  ngOnInit(): void {
    if (this.addModeChild) {
      this.certificat = new Certificat();
    }
    this.certificatService.getZone().subscribe(
      (data: any[]) => {
        console.log(data);

        this.certificatsZone = data;
      }
    );
    console.log(this.certificatsZone);
  }

  sendAddNotif() {
    console.log("khra");
    this.addEvent.emit(this.certificat);
  }

  sendEditNotif() {
    this.editEvent.emit(this.certificat);
  }
}


