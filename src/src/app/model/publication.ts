import DateTimeFormat = Intl.DateTimeFormat;
import {User} from "./user";

export class Publication {
  id: number;
  title: string;
  contente: Text;
  file: string;
  createdAt: DateTimeFormat;
  updatedAt: DateTimeFormat;
  userDr: User;
}
