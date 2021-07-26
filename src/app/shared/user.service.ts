import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
import {Symptom} from "../model/symptom";
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://localhost:3000/users/';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.url);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<User[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addUser(u: User) {
    return this.http.post(this.url, u);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + id);
  }

  updateUser(id: number, u: User) {
    return this.http.put(this.url + id, u);
  }
}
