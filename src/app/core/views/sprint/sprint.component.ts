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

  constructor(private olympiaService: OlympiaService) { }

  ngOnInit() {
    this.olympiaService.getSprintMatchDataResponse().subscribe((res) => {
      this.sprintMatchData = res;
      console.log(this.sprintMatchData)
    })
  }
}
