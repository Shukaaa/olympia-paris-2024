import {Component, OnInit} from '@angular/core';
import {OlympiaService} from "../../service/olympia.service";
import {Country} from "../../types/country";

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss']
})
export class MedalsComponent implements OnInit {
  loadingScore = 0;
  countryMedalsMapM: Map<string, {gold: number, silver: number, bronze: number}> = new Map();
  countryMedalsMapF: Map<string, {gold: number, silver: number, bronze: number}> = new Map();
  medalData: [{country: Country, medals: {gold: number, silver: number, bronze: number}}] = [{country: {id: 0, iso2: "", name: "", iso3: ""}, medals: {gold: 0, silver: 0, bronze: 0}}];
  countryInformationMap: Map<string, Country> = new Map();
  selectedSex: 'male' | 'female' = "male"

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getFilteredAndSortedSwimmingMatchData((swimmingMatchData, disqualifiedMatches) => {
      this.loadingScore += 25;

      swimmingMatchData.forEach((matchData) => {
        this.setMedalsForBothMatchDataToMap(matchData);
      });
    })

    this.olympiaService.getFilteredAndSortedSprintMatchData((sprintMatchData, disqualifiedMatches) => {
      this.loadingScore += 25;

      sprintMatchData.forEach((matchData) => {
        this.setMedalsForBothMatchDataToMap(matchData);
      })

      this.olympiaService.getFilteredAndSortedShowjumpingMatchData((showjumpingMatchData, disqualifiedMatches) => {
        this.loadingScore += 25;

        showjumpingMatchData.forEach((matchData) => {
          this.setMedalsForBothMatchDataToMap(matchData);
        });
      })

      this.olympiaService.getFilteredAndSortedLongjumpMatchData((longjumpMatchData, disqualifiedMatches) => {
        this.loadingScore += 25;

        longjumpMatchData.forEach((matchData) => {
          this.setMedalsForBothMatchDataToMap(matchData);
        });
      })
    })
  }

  setMedalsForBothMatchDataToMap(matchData: any) {
    if (matchData.sex === "m") {
      this.setMedalsForMatchDataToMap(matchData, this.countryMedalsMapM);
    }

    if (matchData.sex === "f") {
      this.setMedalsForMatchDataToMap(matchData, this.countryMedalsMapF);
    }

    this.setMedalData();
  }

  setMedalsForMatchDataToMap(matchData: any, map: Map<string, {gold: number, silver: number, bronze: number}>) {
    const goldCountry = matchData.matchData[0].athlete?.country
    const silverCountry = matchData.matchData[1].athlete?.country
    const bronzeCountry = matchData.matchData[2].athlete?.country

    if (goldCountry) {
      if (!map.has(goldCountry.iso2)) {
        map.set(goldCountry.iso2, {gold: 0, silver: 0, bronze: 0})
        this.countryInformationMap.set(goldCountry.iso2, goldCountry);
      }

      map.get(goldCountry.iso2)!.gold++;
    }

    if (silverCountry) {
      if (!map.has(silverCountry.iso2)) {
        map.set(silverCountry.iso2, {gold: 0, silver: 0, bronze: 0})
        this.countryInformationMap.set(silverCountry.iso2, silverCountry);
      }

      map.get(silverCountry.iso2)!.silver++;
    }

    if (bronzeCountry) {
      if (!map.has(bronzeCountry.iso2)) {
        map.set(bronzeCountry.iso2, {gold: 0, silver: 0, bronze: 0})
        this.countryInformationMap.set(bronzeCountry.iso2, bronzeCountry);
      }

      map.get(bronzeCountry.iso2)!.bronze++;
    }
  }

  setSex(sex: 'male' | 'female') {
    this.selectedSex = sex;
    this.setMedalData();
  }

  getCountryByIso2(iso2: string) {
    return this.countryInformationMap.get(iso2);
  }

  sortMapsByName() {
    this.countryMedalsMapM = new Map([...this.countryMedalsMapM.entries()].sort((a, b) => {
      const countryA = this.getCountryByIso2(a[0])?.name;
      const countryB = this.getCountryByIso2(b[0])?.name;

      if (countryA && countryB) {
        return countryA.localeCompare(countryB);
      }

      return 0;
    }));

    this.countryMedalsMapF = new Map([...this.countryMedalsMapF.entries()].sort((a, b) => {
      const countryA = this.getCountryByIso2(a[0])?.name;
      const countryB = this.getCountryByIso2(b[0])?.name;

      if (countryA && countryB) {
        return countryA.localeCompare(countryB);
      }

      return 0;
    }));

    this.setMedalData();
  }

  sortMapsByGoldMedalCount() {
    this.countryMedalsMapM = new Map([...this.countryMedalsMapM.entries()].sort((a, b) => b[1].gold - a[1].gold));
    this.countryMedalsMapF = new Map([...this.countryMedalsMapF.entries()].sort((a, b) => b[1].gold - a[1].gold));
    this.setMedalData();
  }

  sortMapsBySilverMedalCount() {
    this.countryMedalsMapM = new Map([...this.countryMedalsMapM.entries()].sort((a, b) => b[1].silver - a[1].silver));
    this.countryMedalsMapF = new Map([...this.countryMedalsMapF.entries()].sort((a, b) => b[1].silver - a[1].silver));
    this.setMedalData();
  }

  sortMapsByBronzeMedalCount() {
    this.countryMedalsMapM = new Map([...this.countryMedalsMapM.entries()].sort((a, b) => b[1].bronze - a[1].bronze));
    this.countryMedalsMapF = new Map([...this.countryMedalsMapF.entries()].sort((a, b) => b[1].bronze - a[1].bronze));
    this.setMedalData();
  }

  setMedalData(): void {
    const medalsMap = this.selectedSex === 'male' ? this.countryMedalsMapM : this.countryMedalsMapF;

    // @ts-ignore
    this.medalData = Array.from(medalsMap).map(([iso2, medals]) => {
      return {
        country: this.countryInformationMap.get(iso2)!,
        medals: medals
      }
    });
  }
}
