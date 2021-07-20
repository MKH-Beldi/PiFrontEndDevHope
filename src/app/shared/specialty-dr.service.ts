import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {SpecialtyDr} from '../model/specialtyDr';

@Injectable({
  providedIn: 'root'
})
export class SpecialtyDrService {

  url = 'http://127.0.0.1:8000/api/specialtyDr/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<SpecialtyDr[]>(this.url);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<SpecialtyDr[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addSpecialtyDr(s: SpecialtyDr) {
    return this.http.post(this.url + 'create', s);
  }

  updateSpecialtyDr(id: number, s: SpecialtyDr) {
    return this.http.put(this.url + 'update/' + id, s);
  }
}
