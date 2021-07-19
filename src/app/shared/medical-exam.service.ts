import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MedicalExam} from '../model/medicalExam';
@Injectable({
  providedIn: 'root'
})
export class MedicalExamService {

  url = 'http://localhost:3000/medicalExam/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<MedicalExam[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<MedicalExam>(this.url + id);
  }

  addMedicalExam(me: MedicalExam) {
    return this.http.post(this.url, me);
  }

  deleteMedicalExam(id: number) {
    return this.http.delete(this.url + id);
  }

  updateMedicalExam(id: number, me: MedicalExam) {
    return this.http.put(this.url + id, me);
  }



}
