import {Schedule} from './schedule';
import {Symptom} from './symptom';
import {User} from "./user";

export class Consultation {
  id: number;
  diagnostic: string;
  status: string;
  weightPatient: number;
  heightPatient: number;
  bodyTemperature: number;
  bloodPressure: number;
  createdAt: Date;
  updatedAt: Date;
  schedules: Schedule[];
  symptoms: Symptom[];
}
