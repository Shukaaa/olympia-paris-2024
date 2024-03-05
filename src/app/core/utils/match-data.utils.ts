import {MatchData, SwimmingData} from "../types/match-data";

export class MatchDataUtils {
  static removeDisqualifiedAthletes(swimmingData: MatchData<SwimmingData>): MatchData<SwimmingData> {
    let disqualifiedAthletesM = swimmingData[0].matchData.filter(athlete => athlete.disqualified);
    let disqualifiedAthletesF = swimmingData[1].matchData.filter(athlete => athlete.disqualified);

    swimmingData[0].matchData = swimmingData[0].matchData.filter(athlete => !athlete.disqualified);
    swimmingData[1].matchData = swimmingData[1].matchData.filter(athlete => !athlete.disqualified);

    return [
      {
        sex: 'm',
        matchData: disqualifiedAthletesM
      },
      {
        sex: 'f',
        matchData: disqualifiedAthletesF
      }
    ]
  }

  static orderSwimmingDataByWinner(swimmingData: MatchData<SwimmingData>) {
    let updatedSwimmingData = swimmingData;
    updatedSwimmingData[0].matchData.sort((a, b) => a.time - b.time);
    updatedSwimmingData[1].matchData.sort((a, b) => a.time - b.time);
    return updatedSwimmingData;
  }
}
