import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {FileMedicalExam} from '../model/fileMedicalExam';
@Injectable({
  providedIn: 'root'
})
export class FileMedicalExamService {

  url = 'http://localhost:3000/fileMedicalExam/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<FileMedicalExam[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<FileMedicalExam>(this.url + id);
  }

  addFileMedicalExam(fme: FileMedicalExam) {
    return this.http.post(this.url, fme);
  }

  deleteFileMedicalExam(id: number) {
    return this.http.delete(this.url + id);
  }

  updateFileMedicalExam(id: number, fme: FileMedicalExam) {
    return this.http.put(this.url + id, fme);
  }



}
