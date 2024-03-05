import {Component, OnInit} from '@angular/core';
import {OlympiaService} from "../../service/olympia.service";
import {Athlete} from "../../types/athlete";

@Component({
  selector: 'app-athletes',
  templateUrl: './athletes.component.html',
  styleUrls: ['./athletes.component.scss']
})
export class AthletesComponent implements OnInit {
  athletes: Athlete[] | null = null
  filteredAthletes: Athlete[] | null = null
  searchValueEvent: KeyboardEvent | null = null

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getAthletesResponse().subscribe(res => {
      this.athletes = res
      this.filteredAthletes = res
    })
  }

  getAthleteCountryMap(): Map<string, Athlete[]> {
    const countryMap = new Map<string, Athlete[]>()

    if (this.filteredAthletes) {
      for (const athlete of this.filteredAthletes) {
        const countryKey = athlete.country.name

        if (countryMap.has(countryKey)) {
          countryMap.get(countryKey)!.push(athlete)
        } else {
          countryMap.set(countryKey, [athlete])
        }
      }
    }

    return countryMap
  }

  searchChanged() {
    const searchValue = (this.searchValueEvent!.target as HTMLInputElement).value

    if (this.athletes) {
      this.filteredAthletes = this.athletes.filter(athlete => {
        return athlete.firstName.toLowerCase().includes(searchValue.toLowerCase()) ||
          athlete.lastName.toLowerCase().includes(searchValue.toLowerCase())
      })
    }
  }
}
