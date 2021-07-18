import DateTimeFormat = Intl.DateTimeFormat;
import {Schedule} from "./schedule";
import {Symptom} from "./symptom";

export class Consultation {
  id: number;
  diagnostic: string;
  status: string;
  weightPatient: string;
  heightPatient: string;
  bodyTemperature: string;
  bloodPressure: string;
  createdAt: DateTimeFormat;
  updatedAt: DateTimeFormat;
  schedules: Schedule;
  symptoms: Symptom;
}
