import { Component } from '@angular/core';
import {MatchData, ShowjumpingData} from "../../types/match-data";
import {OlympiaService} from "../../service/olympia.service";

@Component({
  selector: 'app-showjumping',
  templateUrl: './showjumping.component.html',
  styleUrls: ['./showjumping.component.scss']
})
export class ShowjumpingComponent {
  showjumpingMatchData: MatchData<ShowjumpingData> | undefined;
  disqualifiedMatches: MatchData<ShowjumpingData> | undefined;
  sex = 'male';

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getFilteredAndSortedShowjumpingMatchData(this.getData.bind(this));
  }

  getData(showjumpingMatchData: MatchData<ShowjumpingData>, disqualifiedMatches: MatchData<ShowjumpingData>) {
    this.showjumpingMatchData = showjumpingMatchData;
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
