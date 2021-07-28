import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Schedule} from "../model/schedule";
import {Symptom} from "../model/symptom";

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {
  url= 'http://127.0.0.1:8000/api/schedule/';
  constructor(private http:HttpClient) { }
  getSchedule() {
    return this.http.get<Schedule[]>(this.url);
  }
  addSchedule(s: Schedule) {
    return this.http.post(this.url + 'create', s);
  }

  updateSchedule(id: number, s: Schedule)
  {
    return this.http.put(this.url + 'update/' + id,s, {observe: 'response'});
  }
  deleteSchedule(id: number) {
    return this.http.delete(this.url + 'delete/' + id, {observe: 'response'});
  }

  getBy(criteria: string, value: any) {
    return this.http.get<Schedule[]>(this.url + 'get/' + criteria + '/' + value);
  }
}
