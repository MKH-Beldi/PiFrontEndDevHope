import { Component, OnInit } from '@angular/core';
import {SpecialtyDrService} from '../../shared/specialty-dr.service';
import {SpecialtyDr} from '../../model/specialtyDr';

@Component({
  selector: 'app-specialty-dr-form',
  templateUrl: './specialty-dr-form.component.html',
  styleUrls: ['./specialty-dr-form.component.css']
})
export class SpecialtyDrFormComponent implements OnInit {

  specialtyDr: SpecialtyDr;
  specialtiesDr: SpecialtyDr[];

  constructor(private specialtyDrService: SpecialtyDrService) { }

  ngOnInit(): void {
    this.specialtyDr = new SpecialtyDr();
    this.specialtyDrService.getAll().subscribe(
      (data: SpecialtyDr[]) => {
        this.specialtiesDr = data;
      }
    );
  }

  addSpecialtyDr(){
    console.log(this.specialtyDr);
    this.specialtyDrService.addSpecialtyDr(this.specialtyDr).subscribe();
  }

  update($name){
    this.specialtyDrService.getBy('name', $name).subscribe(
      (data: SpecialtyDr[]) => {
        console.log(data);
        this.specialtyDr = data[0];
      }
    );
  }

  updateSpecialtyDr(){
    this.specialtyDrService.updateSpecialtyDr(this.specialtyDr.id, this.specialtyDr).subscribe(
      (data: any) => {
        if (data){
          console.log(data);
        }
      }
    );
  }
}
