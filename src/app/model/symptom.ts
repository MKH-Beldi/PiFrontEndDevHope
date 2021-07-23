import DateTimeFormat = Intl.DateTimeFormat;

export class Symptom {
  id: number;
  name: string;
  description: string;
  type: string;
  createdAt: Date;
  updatedAt: Date;
}
