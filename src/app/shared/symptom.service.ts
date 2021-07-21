import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Symptom} from '../model/symptom';

@Injectable({
  providedIn: 'root'
})
export class SymptomService {

  url = 'http://127.0.0.1:8000/api/symptom/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Symptom[]>(this.url);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<Symptom[]>(this.url + 'get/' + criteria + '/' + value);
  }

  getZone() {
    return this.http.get<Symptom[]>(this.url + 'getZone');
  }

  addSymptom(s: Symptom) {
    return this.http.post(this.url + 'create', s);
  }

  updateSymptom(id: number, s: Symptom) {
    return this.http.put(this.url + 'update/' + id, s);
  }

  deleteSymptom(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }
}
