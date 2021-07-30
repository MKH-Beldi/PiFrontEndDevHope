import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {ConsultationService} from "../../shared/consultation.service";
import {Consultation} from "../../model/consultation";
import * as BalloonEditor from '@ckeditor/ckeditor5-build-balloon';
import {Schedule} from "../../model/schedule";

@Component({
  selector: 'app-consultation',
  templateUrl: './consultation.component.html',
  styleUrls: ['./consultation.component.css']
})
export class ConsultationComponent implements OnInit {

  idCons: string;
  consultation = new Consultation();
  Editor = BalloonEditor;
  editorConfig = {

  };
  constructor(private activtedRoute: ActivatedRoute, private consultationService: ConsultationService) { }

  ngOnInit(): void {
    this.idCons = this.activtedRoute.snapshot.params.id;
    this.consultationService.getBy('id', +this.idCons).subscribe(
      (data: Consultation[]) => {
        this.consultation = data[0];
        console.log(this.consultation);
      }
    );

  }

}
