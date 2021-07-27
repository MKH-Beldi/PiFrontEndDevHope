import DateTimeFormat = Intl.DateTimeFormat;
import {User} from "./user";
import { Publication } from "./publication";

export class Comment {
  id: number;
  contente: string;
  createdAt: string;
  updatedAt: string;
  user: User;
  publication:Publication;
}
