import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Profil} from '../model/profil';

@Injectable({
  providedIn: 'root'
})
export class ProfilService {

  url = 'http://127.0.0.1:8000/api/profil';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Profil[]>(this.url);
  }

  getByp(criteria: string, value: any) {
    return this.http.get<Profil[]>(this.url + '/get/' + criteria + '/' + value);
  }

  addProfil(p: Profil) {
    return this.http.post(this.url + '/create', p);
  }

  updateProfil(id: number, p: Profil) {
    return this.http.put(this.url + '/update/' + id, p);
  }

  deleteProfil(id: number, p: Profil) {
    return this.http.delete(this.url + '/delete/' + id);
  }



}
