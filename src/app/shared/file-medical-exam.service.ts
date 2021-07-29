import { Injectable } from '@angular/core';
import {HttpClient,HttpParams} from '@angular/common/http';
import {FileMedicalExam} from '../model/fileMedicalExam';
@Injectable({
  providedIn: 'root'
})
export class FileMedicalExamService {

  url = 'http://localhost:8000/api/fileMedicalExam/';

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<FileMedicalExam[]>(this.url);
  }
  getBy(criteria: string, value: any) {
    return this.http.get<FileMedicalExam[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addFileMedicalExam(fme: FileMedicalExam) {
    return this.http.post(this.url + 'create', fme);
  }

  updateFileMedicalExam(id: number, fme: FileMedicalExam) {
    return this.http.put(this.url + 'update/' + id, fme);
  }

  deleteFileMedicalExam(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }
  deleteFileMedicalExamByM(me) {
console.log(me);
    const params = new HttpParams().set('medicalExam', me);
    return this.http.delete(this.url ,{params : params });
  }
}
