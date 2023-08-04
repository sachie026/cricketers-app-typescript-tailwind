import data from "../../data/players";

import {
  TYPE_ALL,
  TYPE_BATSMAN,
  TYPE_BOWLER,
  TYPE_WK,
} from "../../data/shared";

export type TPlayer = {
  id?: string;
  name?: string;
  description?: string;
  type?:
    | typeof TYPE_BATSMAN
    | typeof TYPE_BOWLER
    | typeof TYPE_ALL
    | typeof TYPE_WK;
  points?: number;
  rank?: number;
  dob?: number;
  age?: number;
};

const getPlayers = (): Promise<TPlayer[]> => {
  return Promise.resolve<TPlayer[]>(
    (data as TPlayer[])
      .sort((a, b) => {
        const aPoints = a.points ?? 0;
        const bPoints = b.points ?? 0;

        return aPoints === bPoints ? 0 : bPoints > aPoints ? 1 : -1;
      })
      .map((it, index) => ({
        ...it,
        rank: index + 1,
      }))
  );
};

export default getPlayers;
