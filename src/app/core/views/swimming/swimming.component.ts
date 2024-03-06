import { Component } from '@angular/core';
import {MatchData, SwimmingData} from "../../types/match-data";
import {OlympiaService} from "../../service/olympia.service";

@Component({
  selector: 'app-swimming',
  templateUrl: './swimming.component.html',
  styleUrls: ['./swimming.component.scss']
})
export class SwimmingComponent {
  swimmingMatchData: MatchData<SwimmingData> | undefined;
  disqualifiedMatches: MatchData<SwimmingData> | undefined;
  sex = 'male';

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getFilteredAndSortedSwimmingMatchData(this.getData.bind(this));
  }

  getData(swimmingMatchData: MatchData<SwimmingData>, disqualifiedMatches: MatchData<SwimmingData>) {
    this.swimmingMatchData = swimmingMatchData;
    this.disqualifiedMatches = disqualifiedMatches;
  }

  disqualifiedCount() {
    const result = this.disqualifiedMatches?.[this.sex === 'male' ? 0 : 1].matchData.length

    if (result === undefined) {
      return 0;
    }

    return result;
  }
}
