import React from "react";

import {
  TYPE_ALL,
  TYPE_BATSMAN,
  TYPE_BOWLER,
  TYPE_WK,
  TYPE_ALL_ROUNDER,
  typeObj,
} from "../../data/shared";
import {
  ALL_LABEL,
  ALL_ROUNDER_LABEL,
  BATSMAN_LABEL,
  BOWLER_LABEL,
  CLEAR_FILTER_LABEL,
  SEARCH_PLACEHOLDER,
  WK_LABEL,
} from "../../data/labels";

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
  const typeObjKeys = Object.keys(typeObj);

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
          {typeObjKeys.map((typeKey) => {
            return (
              <option value={typeKey} key={typeKey}>
                {typeObj[typeKey]}
              </option>
            );
          })}
        </select>
      </div>

      {showClearButton && (
        <button className="ml-6 text-red-600 text-sm" onClick={onClear}>
          {CLEAR_FILTER_LABEL}
        </button>
      )}
    </div>
  );
}

export default TopBar;
