import { TPlayer } from "../pages/players/getPlayers";
import { QUERY_OPTIONS, TYPE_ALL } from "../data/shared";

export interface searchFilterObj {
  [key: string]: string;
}

export const getAge = (timestamp?: number) => {
  if (!timestamp) return 0;
  var today = new Date();
  var birthDate = new Date(timestamp);
  var age = today.getFullYear() - birthDate.getFullYear();
  var m = today.getMonth() - birthDate.getMonth();
  if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
    age--;
  }
  return age;
};

export const handleFilterSearch = (
  player: TPlayer,
  searchVal: string,
  filterKey: string
) => {
  const isSearchValid = player.name
    ?.toLowerCase()
    .includes(searchVal.toLowerCase());

  const isValidFilter = filterKey === TYPE_ALL || player.type === filterKey;
  if (isValidFilter && isSearchValid) {
    return true;
  }

  return false;
};

export const readAndParseQueryParams = (str: string): searchFilterObj => {
  const trimmedSearch = str.replaceAll("?", "").trim();
  const splitArr = trimmedSearch.split("&");

  const splitObj: searchFilterObj = {};

  splitArr.forEach((param) => {
    const splitParam = param.split("=");
    const queryName = splitParam && splitParam.length ? splitParam[0] : "";
    if (QUERY_OPTIONS.includes(queryName)) {
      splitObj[splitParam[0]] = splitParam[1];
    }
  });

  return splitObj;
};
