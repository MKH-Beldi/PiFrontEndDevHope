import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Certificat} from '../model/certificat';
@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  url = 'http://localhost:3000/certificats/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Certificat[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<Certificat>(this.url + id);
  }

  addCertificat(c: Certificat) {
    return this.http.post(this.url, c);
  }

  deleteCertificat(id: number) {
    return this.http.delete(this.url + id);
  }

  updateCertificat(id: number, c: Certificat) {
    return this.http.put(this.url + id, c);
  }



}
