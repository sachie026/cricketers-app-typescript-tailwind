import TopBar from "../../components/top-bar";
import TableComponent from "../../components/ctable";

import { CRICKETERS_LIST_TITLE } from "../../data/labels";
import { usePlayers } from "./usePlayers";

function PlayersList() {
  const {
    sortPlayers,
    playersToShow,
    filterPlayers,
    updateSearchVal,
    searchVal,
    filterKey,
  } = usePlayers();

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
