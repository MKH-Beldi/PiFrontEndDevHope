import DateTimeFormat = Intl.DateTimeFormat;
import {User} from "./user";

export class Comment {
  id: number;
  contente: string;
  createdAt: DateTimeFormat;
  updatedAt: DateTimeFormat;
  user: User;
}
