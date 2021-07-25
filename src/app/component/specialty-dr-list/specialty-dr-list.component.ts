import { Component, OnInit } from '@angular/core';
import {SpecialtyDr} from '../../model/specialtyDr';
import {SpecialtyDrService} from '../../shared/specialty-dr.service';


@Component({
  selector: 'app-specialty-dr-list',
  templateUrl: './specialty-dr-list.component.html',
  styleUrls: ['./specialty-dr-list.component.css']
})
export class SpecialtyDrListComponent implements OnInit {

  specialtiesDr: SpecialtyDr[];

  constructor(private specialtyDrService: SpecialtyDrService ) {}

  ngOnInit(): void {
    this.specialtyDrService.getAll().subscribe(
      (data: SpecialtyDr[]) => {
        this.specialtiesDr = data;
      }
    );
  }

}
