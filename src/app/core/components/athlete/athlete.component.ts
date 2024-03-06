import {Component, Input} from '@angular/core';
import {Athlete} from "../../types/athlete";

@Component({
  selector: 'app-athlete',
  templateUrl: './athlete.component.html',
  styleUrls: ['./athlete.component.scss']
})
export class AthleteComponent {
  @Input() athlete: Athlete = {
    id: 0,
    firstName: "",
    lastName: "",
    description: "",
    country: {
      id: 0,
      name: "",
      iso2: "",
      iso3: ""
    },
    birthdate: new Date(),
    sex: "m"
  }
  @Input() athleteMedalsMap: Map<number, { gold: string[], silver: string[], bronze: string[] }> = new Map<number, { gold: string[], silver: string[], bronze: string[] }>()

  calculateAge(): number {
    const birthdate = new Date(this.athlete.birthdate)
    const ageDiffMs = Date.now() - birthdate.getTime()
    const ageDate = new Date(ageDiffMs)

    return Math.abs(ageDate.getUTCFullYear() - 1970)
  }

  getMedals(): { gold: string[], silver: string[], bronze: string[] } {
    return this.athleteMedalsMap.get(this.athlete.id) || { gold: [], silver: [], bronze: [] }
  }
}
