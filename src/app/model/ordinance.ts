import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from "./consultation";

export class Ordinance {
  id: number;
  prescription: Text;
  createdAt: DateTimeFormat;
  updatedA: DateTimeFormat;
  consultation: Consultation;
}
