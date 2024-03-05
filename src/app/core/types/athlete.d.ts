import {Country} from "./country";

export type Athlete = {
  id: number,
  firstName: string,
  lastName: string,
  description: string,
  sex: "m" | "f",
  country: Country,
  birthdate: Date
}
