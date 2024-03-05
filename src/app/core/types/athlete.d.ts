import {Country} from "./country";
import {Sex} from "./sex";

export type Athlete = {
  id: number,
  firstName: string,
  lastName: string,
  description: string,
  sex: Sex,
  country: Country,
  birthdate: Date
}
