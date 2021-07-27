import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from './consultation';
import {User} from './user';

export class Schedule {
  id: number;
  start: Date;
  end: Date;
  date: Date;
  // tslint:disable-next-line:ban-types
  isAvailable: boolean;
  title: string;
  color: string;
  userDr: User;
  userPatient: User;
  createdAt: Date;
  updatedA: Date;
  consultation: Consultation;
}
