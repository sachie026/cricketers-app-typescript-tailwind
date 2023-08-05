import React from "react";

import {
  TYPE_ALL,
  TYPE_BATSMAN,
  TYPE_BOWLER,
  TYPE_WK,
  TYPE_ALL_ROUNDER,
} from "../../data/shared";
import {
  ALL_LABEL,
  ALL_ROUNDER_LABEL,
  BATSMAN_LABEL,
  BOWLER_LABEL,
  SEARCH_PLACEHOLDER,
  WK_LABEL,
} from "../../data/labels";

const typeArray = [
  { key: TYPE_ALL, val: ALL_LABEL },
  { key: TYPE_BATSMAN, val: BATSMAN_LABEL },
  { key: TYPE_BOWLER, val: BOWLER_LABEL },
  { key: TYPE_ALL_ROUNDER, val: ALL_ROUNDER_LABEL },
  { key: TYPE_WK, val: WK_LABEL },
];

interface Props {
  filterPlayers: (filterKey: string) => void;
  value: string;
  filterKey: string;
  updateSearchVal: (value: string) => void;
  onClear: () => void;
}

function TopBar({
  filterPlayers,
  updateSearchVal,
  value,
  filterKey,
  onClear,
}: Props) {
  const searchTextChangeHandler = (e: React.ChangeEvent<HTMLInputElement>) => {
    updateSearchVal(e.target.value);
  };

  const showClearButton = value !== "" || filterKey !== TYPE_ALL;

  return (
    <div className="mb-6 flex">
      <input
        type="text"
        className="border border-gray-300 rounded-md py-1 px-4 mr-6 w-1/2"
        value={value}
        placeholder={SEARCH_PLACEHOLDER}
        onChange={searchTextChangeHandler}
      />
      <div className="border border-gray-300 rounded-md py-1 px-2">
        <select
          onChange={(e) => filterPlayers(e.target.value)}
          value={filterKey}
        >
          {typeArray.map((typeKey) => {
            const { key, val } = typeKey;
            return (
              <option value={key} key={key}>
                {val}
              </option>
            );
          })}
        </select>
      </div>

      {showClearButton && (
        <button className="ml-6 text-red-600 text-sm" onClick={onClear}>
          Clear filters
        </button>
      )}
    </div>
  );
}

export default TopBar;
