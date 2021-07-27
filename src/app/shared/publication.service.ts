import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Publication} from '../model/publication';

@Injectable({
  providedIn: 'root'
})
export class PublicationService {
  url = 'http://127.0.0.1:8000/api/publication/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Publication[]>(this.url);
  }

  getBypu(criteria: string, value: any) {
    return this.http.get<Publication[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addPublication(p: Publication) {
    return this.http.post(this.url + 'create', p);
  }

  updatePublication(id: number, p: Publication) {
    return this.http.put(this.url + 'update/' + id, p);
  }

  deletePublication(id: number, p: Publication) {
    return this.http.delete(this.url + 'delete/' + id);
  }



}
