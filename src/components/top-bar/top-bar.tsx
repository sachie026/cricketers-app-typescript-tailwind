import React from "react";

import {
  TYPE_ALL,
  TYPE_BATSMAN,
  TYPE_BOWLER,
  TYPE_WK,
  TYPE_ALL_ROUNDER,
} from "../../data/shared";
import { SEARCH_PLACEHOLDER } from "../../data/labels";

const typeArray = [
  TYPE_ALL,
  TYPE_BATSMAN,
  TYPE_BOWLER,
  TYPE_ALL_ROUNDER,
  TYPE_WK,
];

interface Props {
  filterPlayers: (filterKey: string) => void;
  value: string;
  filterKey: string;
  updateSearchVal: (value: string) => void;
}

function TopBar({ filterPlayers, updateSearchVal, value, filterKey }: Props) {
  const searchTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchVal(e.target.value);
  };
  return (
    <div className="mb-6">
      <input
        type="text"
        className="border border-gray-300 rounded-md py-1 px-4 mr-6 w-1/2"
        value={value}
        placeholder={SEARCH_PLACEHOLDER}
        onChange={searchTextChangeHandler}
      />
      <select
        onChange={(e) => filterPlayers(e.target.value)}
        className="border border-gray-300 rounded-md py-1 px-4"
        value={filterKey}
      >
        {typeArray.map((typeKey) => {
          return (
            <option value={typeKey} key={typeKey}>
              {typeKey}
            </option>
          );
        })}
      </select>
    </div>
  );
}

export default TopBar;
