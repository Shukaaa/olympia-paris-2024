import {Athlete} from "./athlete";

export type MatchData<T> = [
  {
    sex: 'm',
    matchData: T[]
  },
  {
    sex: 'f',
    matchData: T[]
  },
]

type MatchDataWithTime = {
  id: number,
  athleteId: number,
  athlete: Athlete | null,
  time: number,
  disqualified: boolean
}

export type SwimmingData = MatchDataWithTime;
export type SprintData = MatchDataWithTime;

export type LongjumpData = {
  id: number,
  athleteId: number,
  athlete: Athlete | null,
  jumpLength: number[]
  disqualified: boolean
}

export type ShowjumpingData = {
  id: number,
  athleteId: number,
  athlete: Athlete | null,
  time: number,
  penaltyPoints: number,
  disqualified: boolean
}
