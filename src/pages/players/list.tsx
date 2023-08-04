import React, { useCallback, useEffect, useState } from "react";
import { useLocation, useSearchParams } from "react-router-dom";

import TopBar from "../../components/top-bar";
import TableComponent from "../../components/ctable";

import getPlayers, { TPlayer } from "./getPlayers";
import {
  getAge,
  handleFilterSearch,
  readAndParseQueryParams,
} from "../../utils/utility-methods";
import {
  ASC_KEY,
  DESC_KEY,
  FILTER_KEY,
  QUERY_OPTIONS,
  SORT_ORDER,
  TYPE_ALL,
  SEARCH_KEY,
} from "../../data/shared";
import { CRICKETERS_LIST_TITLE } from "../../data/labels";

function PlayersList() {
  const [players, setPlayers] = useState<TPlayer[]>([]);
  const [sortBy, setSortBy] = useState<SORT_ORDER>(ASC_KEY);
  const [rankedPlayers, setRankedPlayers] = useState<TPlayer[]>([]);
  const [playersToShow, setPlayersToShow] = useState<TPlayer[]>([]);
  const [filterKey, setFilterKey] = useState(TYPE_ALL);
  const [searchVal, setSearchVal] = useState("");
  const { search } = useLocation();
  const [_searchParams, setSearchParams] = useSearchParams({});

  const readQueryParams = useCallback(() => {
    if (search && search.length) {
      const splitArr = readAndParseQueryParams(search);

      const splitObj: any = {};

      splitArr.forEach((param) => {
        const splitParam = param.split("=");
        const queryName = splitParam && splitParam.length ? splitParam[0] : "";
        if (QUERY_OPTIONS.includes(queryName)) {
          splitObj[splitParam[0]] = splitParam[1];
        }
      });

      setSearchParams({
        search: splitObj?.search,
        filter: splitObj?.filter,
      });

      if (SEARCH_KEY in splitObj) {
        setSearchVal(splitObj.search);
      }
      if (FILTER_KEY in splitObj) {
        setFilterKey(splitObj.filter);
      }
    }
  }, []);

  const fetchPlayers = () => {
    getPlayers().then((res: TPlayer[]) => {
      setPlayers(res);
    });
  };

  const filterPlayers = useCallback(
    (filterKey: string, updateStateNotRequired?: boolean) => {
      let temp = rankedPlayers.filter((player) =>
        handleFilterSearch(player, searchVal, filterKey)
      );

      setPlayersToShow([...temp]);
      if (!updateStateNotRequired) {
        setFilterKey(filterKey);
        setSearchParams({
          search: searchVal,
          filter: filterKey,
        });
      }
    },
    [rankedPlayers, searchVal, setSearchParams]
  );

  const updateSearchVal = useCallback(
    (val: string, updateStateNotRequired?: boolean) => {
      let temp = rankedPlayers.filter((player) =>
        handleFilterSearch(player, val, filterKey)
      );

      setPlayersToShow([...temp]);

      if (!updateStateNotRequired) {
        setSearchVal(val);
        setSearchParams({
          search: val,
          filter: filterKey,
        });
      }
    },
    [filterKey, rankedPlayers, setSearchParams]
  );

  const sortPlayers = (key: string) => {
    const temp: TPlayer[] = [...playersToShow];
    temp.sort((playerA: any, playerB: any) => {
      if (sortBy === ASC_KEY) {
        return playerA[key] < playerB[key] ? -1 : 1;
      }
      return playerA[key] > playerB[key] ? -1 : 1;
    });

    setSortBy(sortBy === ASC_KEY ? DESC_KEY : ASC_KEY);
    setPlayersToShow([...temp]);
  };

  const mapPlayers = useCallback(() => {
    const updatedData = players.map((player, index) => {
      return {
        ...player,
        age: getAge(player.dob),
        rank: index + 1,
      };
    });

    setRankedPlayers([...updatedData]);
    setPlayersToShow([...updatedData]);
  }, [players]);

  useEffect(() => {
    updateSearchVal(searchVal, true);
  }, [searchVal, updateSearchVal]);

  useEffect(() => {
    filterPlayers(filterKey, true);
  }, [filterKey, filterPlayers]);

  useEffect(() => {
    readQueryParams();
    fetchPlayers();
  }, [readQueryParams]);

  useEffect(() => {
    mapPlayers();
  }, [mapPlayers, players]);

  return (
    <div className="p-6 w-3/4 bg-white rounded-lg">
      <div className="text-4xl font-extrabold mb-8">
        {CRICKETERS_LIST_TITLE}
      </div>

      <TopBar
        filterPlayers={filterPlayers}
        value={searchVal}
        filterKey={filterKey}
        updateSearchVal={updateSearchVal}
      />

      <TableComponent
        playersToShow={playersToShow || []}
        sortPlayers={sortPlayers}
      />
    </div>
  );
}

export default PlayersList;
