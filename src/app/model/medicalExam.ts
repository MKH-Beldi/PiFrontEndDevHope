import DateTimeFormat = Intl.DateTimeFormat;
import {Consultation} from "./consultation";

export class MedicalExam {
  id: number;
  title: string;
  description: string;
  observationLab: string;
  status: string;
  createdAt: DateTimeFormat;
  updatedA: DateTimeFormat;
  consultation: Consultation;
  userLab: number;
  }
