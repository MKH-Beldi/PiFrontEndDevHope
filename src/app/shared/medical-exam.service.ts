import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MedicalExam} from '../model/medicalExam';
@Injectable({
  providedIn: 'root'
})
export class MedicalExamService {

  url = 'http://localhost:8000/api/medicalExam/';

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<MedicalExam[]>(this.url);
  }
  getBy(criteria: string, value: any) {
    return this.http.get<MedicalExam[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addMedicalExam(me: MedicalExam) {
    console.log(me);
    return this.http.post(this.url + 'create', me);
  }

  updateMedicalExam(id: number, me: MedicalExam) {
    return this.http.put(this.url + 'update/' + id, me);
  }

  deleteMedicalExam(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }
}
