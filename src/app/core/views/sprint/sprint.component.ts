import {Component, OnInit} from '@angular/core';
import {OlympiaService} from "../../service/olympia.service";
import {MatchData, SprintData} from "../../types/match-data";

@Component({
  selector: 'app-sprint',
  templateUrl: './sprint.component.html',
  styleUrls: ['./sprint.component.scss']
})
export class SprintComponent implements OnInit {
  sprintMatchData: MatchData<SprintData> | undefined;
  disqualifiedMatches: MatchData<SprintData> | undefined;
  sex = 'male';

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getFilteredAndSortedSprintMatchData(this.getData.bind(this));
  }

  getData(sprintMatchData: MatchData<SprintData>, disqualifiedMatches: MatchData<SprintData>) {
    this.sprintMatchData = sprintMatchData;
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
