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

export type SwimmingData = {
  id: number,
  athleteId: number,
  athlete: Athlete | null,
  time: number,
  disqualified: boolean
}
