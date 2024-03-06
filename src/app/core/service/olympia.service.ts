import {Athlete} from "../types/athlete";
import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import {environment} from "../../environments/environment";
import {
  LongjumpData,
  MatchData,
  ShowjumpingData,
  SprintData,
  SwimmingData
} from "../types/match-data";

@Injectable()
export class OlympiaService {
  constructor(private http: HttpClient) {
  }

  getAthletesResponse() {
    return this.http.get<Athlete[]>(environment.apiPath + "/athletes")
  }

  getSwimmingMatchDataResponse() {
    return this.http.get<MatchData<SwimmingData>>(environment.apiPath + "/sports/matches/swimming")
  }

  getSprintMatchDataResponse() {
    return this.http.get<MatchData<SprintData>>(environment.apiPath + "/sports/matches/sprint")
  }

  getLongjumpMatchDataResponse() {
    return this.http.get<MatchData<LongjumpData>>(environment.apiPath + "/sports/matches/longjump")
  }

  getShowjumpingMatchDataResponse() {
    return this.http.get<MatchData<ShowjumpingData>>(environment.apiPath + "/sports/matches/showjumping")
  }

  // utility functions
  private mapAthletesToMatchData(matchData: any, athletes: Athlete[]) {
    matchData.matchData.forEach((matchDataWithTime: any) => {
      matchDataWithTime.athlete = athletes.find((athlete) => athlete.id === matchDataWithTime.athleteId) || null;
    })
  }

  private splitUpDisqualifiedMatches(matchData: any) {
    let disqualifiedMatches: any[] = [
      {
        sex: "m",
        matchData: []
      },
      {
        sex: 'f',
        matchData: []
      }
    ];

    matchData.matchData.filter((matchDataWithTime: any) => {
      if (matchDataWithTime.disqualified) {
        if (matchDataWithTime.athlete?.sex === 'm') {
          disqualifiedMatches[0].matchData.push(matchDataWithTime);
        }

        if (matchDataWithTime.athlete?.sex === 'f') {
          disqualifiedMatches[1].matchData.push(matchDataWithTime);
        }

        return false;
      }

      return true;
    });

    return disqualifiedMatches;
  }

  private removeDisqualifiedMatches(matchData: any) {
    return matchData.matchData.filter((matchDataWithTime: any) => {
      return !matchDataWithTime.disqualified;
    });
  }

  getFilteredAndSortedLongjumpMatchData(cb: (longjumpMatchData: MatchData<LongjumpData>, disqualifiedMatches: MatchData<LongjumpData>) => void) {
    let longjumpMatchData: MatchData<LongjumpData> | undefined;
    let disqualifiedMatches: MatchData<LongjumpData> | undefined;

    this.getAthletesResponse().subscribe((athletes) => {
      this.getLongjumpMatchDataResponse().subscribe((res) => {
        res.forEach((matchData) => {
          matchData.matchData.forEach((matchDataWithJumpDistance) => {
            matchDataWithJumpDistance.jumpLength.sort((a, b) => b - a)
          })
          matchData.matchData.sort((a, b) => b.jumpLength[0] - a.jumpLength[0])

          this.mapAthletesToMatchData(matchData, athletes);
          disqualifiedMatches = this.splitUpDisqualifiedMatches(matchData) as MatchData<LongjumpData>;
          matchData.matchData = this.removeDisqualifiedMatches(matchData);

          longjumpMatchData = res;
          console.log(disqualifiedMatches);

          if (disqualifiedMatches) {
            cb(longjumpMatchData, disqualifiedMatches);
          }
        })
      });
    });
  }

  getFilteredAndSortedShowjumpingMatchData(cb: (showjumpingMatchData: MatchData<ShowjumpingData>, disqualifiedMatches: MatchData<ShowjumpingData>) => void) {
    let showjumpingMatchData: MatchData<ShowjumpingData> | undefined;
    let disqualifiedMatches: MatchData<ShowjumpingData> | undefined;

    this.getAthletesResponse().subscribe((athletes) => {
      this.getShowjumpingMatchDataResponse().subscribe((res) => {
        res.forEach((matchData) => {
          matchData.matchData.sort((a, b) => a.penaltyPoints - b.penaltyPoints)

          // when the athlete has the same penalty points, sort by time
          matchData.matchData.sort((a, b) => {
            if (a.penaltyPoints === b.penaltyPoints) {
              return a.time - b.time;
            }

            return 0;
          });

          this.mapAthletesToMatchData(matchData, athletes);
          disqualifiedMatches = this.splitUpDisqualifiedMatches(matchData) as MatchData<ShowjumpingData>;
          matchData.matchData = this.removeDisqualifiedMatches(matchData);

          showjumpingMatchData = res;

          if (disqualifiedMatches) {
            cb(showjumpingMatchData, disqualifiedMatches);
          }
        })
      });
    });
  }

  getFilteredAndSortedSprintMatchData(cb: (sprintMatchData: MatchData<SprintData>, disqualifiedMatches: MatchData<SprintData>) => void) {
    let sprintMatchData: MatchData<SprintData> | undefined;
    let disqualifiedMatches: MatchData<SprintData> | undefined;

    this.getAthletesResponse().subscribe((athletes) => {
      this.getSprintMatchDataResponse().subscribe((res) => {
        res.forEach((matchData) => {
          matchData.matchData.sort((a, b) => a.time - b.time)

          this.mapAthletesToMatchData(matchData, athletes);
          disqualifiedMatches = this.splitUpDisqualifiedMatches(matchData) as MatchData<SprintData>;
          matchData.matchData = this.removeDisqualifiedMatches(matchData);

          sprintMatchData = res;

          if (disqualifiedMatches) {
            console.log("sprint", sprintMatchData);
            cb(sprintMatchData, disqualifiedMatches);
          }
        })
      });
    });
  }

  getFilteredAndSortedSwimmingMatchData(cb: (swimmingMatchData: MatchData<SwimmingData>, disqualifiedMatches: MatchData<SwimmingData>) => void) {
    let swimmingMatchData: MatchData<SwimmingData> | undefined;
    let disqualifiedMatches: MatchData<SwimmingData> | undefined;

    this.getAthletesResponse().subscribe((athletes) => {
      this.getSwimmingMatchDataResponse().subscribe((res) => {
        res.forEach((matchData) => {
          matchData.matchData.sort((a, b) => a.time - b.time)

          this.mapAthletesToMatchData(matchData, athletes);
          disqualifiedMatches = this.splitUpDisqualifiedMatches(matchData) as MatchData<SwimmingData>;
          matchData.matchData = this.removeDisqualifiedMatches(matchData);

          swimmingMatchData = res;

          if (disqualifiedMatches) {
            cb(swimmingMatchData, disqualifiedMatches);
          }
        })
      });
    });
  }
}
