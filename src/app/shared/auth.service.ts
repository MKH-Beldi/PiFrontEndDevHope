import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {User} from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  url = 'http://127.0.0.1:8000/api/login';

  constructor(private http: HttpClient) { }

  authenticate(username, password) {
    return this.http
      .post<any>(this.url, { username, password })
      .pipe(
        map(userData => {
          sessionStorage.setItem('username', username);
          let tokenStr = 'Bearer ' + userData.token;
          sessionStorage.setItem('token', tokenStr);
          return userData;
        })
      );
  }

  isUserLoggedIn() {
    let user = sessionStorage.getItem('username');
    return !(user === null);
  }

  logOut() {
    sessionStorage.removeItem('username');
  }

  getUser() {
    return this.http.get<User>('http://127.0.0.1:8000/api/getUser');
  }

}
