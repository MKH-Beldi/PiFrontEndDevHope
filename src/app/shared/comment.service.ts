import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Publication} from '../model/publication';

@Injectable({
  providedIn: 'root'
})
export class CommentService {
  url = 'http://127.0.0.1:8000/api/comment';

  constructor(private http: HttpClient) {
  }

  getAll() {
    return this.http.get<Comment[]>(this.url);
  }

  getByc(criteria: string, value: any) {
    return this.http.get<Comment[]>(this.url + 'get/' + criteria + '/' + value);
  }

  addComment(c: Comment) {
    return this.http.post(this.url + 'create', c);
  }

  updateComment(id: number, c: Comment) {
    return this.http.put(this.url + 'update/' + id, c);
  }

  deleteComment(id: number, c: Comment) {
    return this.http.delete(this.url + 'delete/' + id);
  }

}
