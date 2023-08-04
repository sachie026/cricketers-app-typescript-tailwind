export const NAME_KEY: string = "name";
export const TYPE_KEY: string = "type";
export const RANK_KEY: string = "rank";
export const AGE_key: string = "age";
export const POINTS_KEY: string = "points";
export const DESCRIPTION_KEY: string = "description";
export const DOB_KEY: string = "date of birth";

export const TYPE_BATSMAN = "batsman";
export const TYPE_BOWLER = "bowler";
export const TYPE_ALL_ROUNDER = "allRounder";
export const TYPE_WK = "wicketKeeper";
export const TYPE_ALL = "all";

export const ASC_KEY = "asc";
export const DESC_KEY = "desc";
export type SORT_ORDER = typeof ASC_KEY | typeof DESC_KEY;

export const DETAILS_ROUTE = "/details";
export const LIST_ROUTE = "/players";

export const TABLE_HEADER_KEYS = [
  NAME_KEY,
  TYPE_KEY,
  POINTS_KEY,
  RANK_KEY,
  AGE_key,
];

export const PAGE_SIZE = 10;
