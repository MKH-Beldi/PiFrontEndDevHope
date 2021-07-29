import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:8000/api/login/';
  userRoles: string[] = ['ROLE_ADMIN', 'ROLE_DR', 'ROLE_PATIENT', 'ROLE_LAB'];

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.url);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<User[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addUser(u: User) {
    return this.http.post(this.url + 'create', u);
  }

  deleteUser(id: number) {
    return this.http.delete(this.url + id);
  }

  updateUser(id: number, u: User) {
    return this.http.put(this.url + id, u);
  }

  getRoles(){
    return this.userRoles;
  }

}
