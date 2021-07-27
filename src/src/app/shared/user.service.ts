import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from '../model/user';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  url = 'http://127.0.0.1:8000/api/user/';
//http://127.0.0.1:8000/api/user/get/id/1
  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<User[]>(this.url);
  }

  getById(id: number) {
    return this.http.get<User>(this.url + id);
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
  getUserByCriteria(criteria, value){
    return this.http.get<User>(this.url +'get/'+criteria+'/'+value);
  }
}
