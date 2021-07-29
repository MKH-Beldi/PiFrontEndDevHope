import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { Symptom } from 'src/app/model/symptom';

@Component({
  selector: 'app-publication-form',
  templateUrl: './publication-form.component.html',
  styleUrls: ['./publication-form.component.css']
})

export class PublicationFormComponent implements OnInit {
  @Output() editEvent = new EventEmitter<Publication>();
  @Input() publication : Publication;

  constructor() { }

  ngOnInit(): void {
  }
  sendEditNotif() {
    this.editEvent.emit(this.publication);
  }


}
