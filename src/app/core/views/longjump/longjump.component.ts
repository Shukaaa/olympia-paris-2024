import {Component, OnInit} from '@angular/core';
import {LongjumpData, MatchData} from "../../types/match-data";
import {OlympiaService} from "../../service/olympia.service";

@Component({
  selector: 'app-longjump',
  templateUrl: './longjump.component.html',
  styleUrls: ['./longjump.component.scss']
})
export class LongjumpComponent implements OnInit {
  longjumpMatchData: MatchData<LongjumpData> | undefined;
  disqualifiedMatches: MatchData<LongjumpData> | undefined;
  sex = 'male';

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getFilteredAndSortedLongjumpMatchData(this.getData.bind(this));
  }

  getData(longjumpMatchData: MatchData<LongjumpData>, disqualifiedMatches: MatchData<LongjumpData>) {
    this.longjumpMatchData = longjumpMatchData;
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
