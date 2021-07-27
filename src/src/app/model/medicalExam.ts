import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from "./consultation";
import {User} from "./user";

export class MedicalExam {
  id: number;
  title: string;
  description: string;
  observationLab: string;
  status: string;
  createdAt: DateTimeFormat;
  updatedA: DateTimeFormat;
  consultation: Consultation;
  userLab: User;
  }
