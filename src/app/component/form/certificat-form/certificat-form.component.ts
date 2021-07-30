import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Certificat} from '../../../model/certificat';
import {CertificatService} from '../../../shared/certificat.service';
import {DatePipe} from '@angular/common';
import {ActivatedRoute} from '@angular/router';
import {Consultation} from '../../../model/consultation';
import {T} from '@angular/cdk/keycodes';

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
  id: number;
  certificatsZone: any[];
  @Input() addModeChild: boolean;
  @Input() certificat1: Certificat;
  @Output() addEvent = new EventEmitter<Certificat>();
  @Output() editEvent = new EventEmitter<Certificat>();

  constructor(private certificatService: CertificatService, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    if (this.addModeChild) {
      this.certificat = new Certificat();
    }
  }

  sendAddNotif() {
    let consultation = new Consultation();
    consultation.id = this.id;
    this.certificat.consultation = consultation;
    console.log(this.certificat);
    this.addEvent.emit(this.certificat);
  }

  sendEditNotif() {
    this.editEvent.emit(this.certificat);
  }
}


