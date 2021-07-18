import DateTimeFormat = Intl.DateTimeFormat;
import {SpecialtyDr} from "./specialtyDr";
import {City} from "./city";
export class User {
  id: number;
  email: string;
  roles: string;
  password: string;
  status: string;
  lastName: string;
  firstName: string;
  dateOfBirth: Date;
  sex: string;
  cin: number;
  officeTel: boolean;
  mobileTel: string;
  imgProfil: string;
  address: string;
  zipCode: string;
  nationality: string;
  nameLab: string;
  createdAt: DateTimeFormat;
  updatedAt: DateTimeFormat;
  city: City;
  specialtyDr: SpecialtyDr;
}
