import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from "./consultation";
export class Certificat {
  id: number;
  nbrRestDay: number;
  startDate: Date;
  endDate: Date;
  consultation: Consultation ;
  createdAt: Date;
  updatedAt: Date;
}
