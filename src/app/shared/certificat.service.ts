import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Certificat} from '../model/certificat';
import {Symptom} from "../model/symptom";
@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  url = 'http://localhost:8000/api/certificat/';

  constructor(private http: HttpClient) {
  }
  getAll() {
    return this.http.get<Certificat[]>(this.url);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<Certificat[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addCertificat(c: Certificat) {
    return this.http.post(this.url + 'create', c);
  }

  updateCertificat(id: number, c: Certificat) {
    return this.http.put(this.url + 'update/' + id, c, {observe: 'response'});
  }
  deleteCertificat(id: number) {
    return this.http.delete(this.url + 'delete/' + id, {observe: 'response'});
  }
}
