import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from "./consultation";
export class Certificat {
  id: string;
  nbrRestDay: number;
  startDate: Date;
  endDate: Date;
  consultation: Consultation ;
  createdAt: DateTimeFormat;
  updatedAt: DateTimeFormat;
}
