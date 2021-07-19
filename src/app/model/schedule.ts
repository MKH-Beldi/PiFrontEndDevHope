import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from "./consultation";
import {User} from "./user";

export class Schedule {
  id: number;
  startHour: DateTimeFormat;
  endHour: DateTimeFormat;
  // tslint:disable-next-line:ban-types
  isAvailable: Boolean;
  title: string;
  color: string;
  userDr: User;
  userPatient: User;
  createdAt: DateTimeFormat;
  updatedA: DateTimeFormat;
  consultation: Consultation;
}