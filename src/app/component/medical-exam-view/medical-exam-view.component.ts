import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-medical-exam-view',
  templateUrl: './medical-exam-view.component.html',
  styleUrls: ['./medical-exam-view.component.css']
})
export class MedicalExamViewComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    console.log("hi");
  }

}
