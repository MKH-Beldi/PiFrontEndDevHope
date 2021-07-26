import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Schedule} from "../model/schedule";


@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  url = 'http://127.0.0.1:8000/api/schedule/';

  constructor(private http: HttpClient) {
  }
  getSchedule() {
    return this.http.get<Schedule[]>(this.url);
  }
  addSchedule(s: Schedule) {
    return this.http.post(this.url + 'create', s);
  }

  getBy(criteria: string, value: any) {
    return this.http.get<Schedule[]>(this.url + 'get/' + criteria + '/' + value);
  }
  updateSchedule(id: number, s: Schedule)
  {
    return this.http.put(this.url + 'update/' + id, s);
  }
  deleteSchedule(id: number) {
    return this.http.delete(this.url + 'delete/' + id);
  }
}
