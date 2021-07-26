import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Consultation} from '../model/consultation';

@Injectable({
  providedIn: 'root'
})
export class ConsultationService {

  url = 'http://127.0.0.1:8000/api/consultation/';
  statusConsultation: string[] = ['en attente de consultation', 'en cours de traitement', 'en attente d\'examen ', 'en attente de contrôle', 'patient s\'est rétabli'];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Consultation[]>(this.url);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<Consultation[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addConsultation(c: Consultation) {
    return this.http.post(this.url + 'create', c);
  }

  updateConsultation(id: number, c: Consultation) {
    return this.http.put(this.url + 'update/' + id, c);
  }

  deleteConsultation(id: number) {
    return this.http.delete(this.url + 'delete/' + id, {observe: 'response'});
  }
  getStatus(){
    return this.statusConsultation;
  }
}
