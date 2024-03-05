import {Component, OnInit} from '@angular/core';
import {OlympiaService} from "../../service/olympia.service";
import {MatchData, SwimmingData} from "../../types/match-data";
import {MatchDataUtils} from "../../utils/match-data.utils";
import {Athlete} from "../../types/athlete";

@Component({
  selector: 'app-medals',
  templateUrl: './medals.component.html',
  styleUrls: ['./medals.component.scss']
})
export class MedalsComponent implements OnInit {
  swimmingMatchData: MatchData<SwimmingData> | null = null
  displayedSwimmingMatchData: SwimmingData[] | null = null
  athletes: Athlete[] | null = null

  constructor(private olympiaService: OlympiaService) {
  }

  ngOnInit() {
    this.olympiaService.getAthletesResponse().subscribe(res => {
      this.athletes = res
    })

    this.olympiaService.getSwimmingMatchDataResponse().subscribe(res => {
      this.swimmingMatchData = MatchDataUtils.orderSwimmingDataByWinner(res)
      MatchDataUtils.removeDisqualifiedAthletes(this.swimmingMatchData)

      this.swimmingMatchData.forEach(matchData => {
        matchData.matchData.forEach(swimmingData => {
          swimmingData.athlete = this.athletes?.find(athlete => athlete.id === swimmingData.athleteId) || null
        })
      })

      this.sexSelected("male");
    })
  }

  sexSelected(sex: string) {
    if (this.swimmingMatchData) {
      if (sex === "male") {
        this.displayedSwimmingMatchData = this.swimmingMatchData[0].matchData
      }

      if (sex === "female") {
        this.displayedSwimmingMatchData = this.swimmingMatchData[1].matchData
      }
    }

    console.log(this.displayedSwimmingMatchData)
  }
}
