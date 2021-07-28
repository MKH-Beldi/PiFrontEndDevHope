import DateTimeFormat = Intl.DateTimeFormat;
import {User} from './user';

export class Profil {
  id: number;
  imgCover: string;
  biography: string;
  currentPosition: string;
  note: number;
  academicTraining: string;
  workExperience: string;
  createdAt: DateTimeFormat;
  updatedA: DateTimeFormat;
  userDr: User;
}
