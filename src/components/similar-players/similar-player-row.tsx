import React from "react";

import { Link } from "react-router-dom";
import { TPlayer } from "../../pages/players/getPlayers";
import { DETAILS_ROUTE } from "../../data/shared";
import { POINTS_LABEL, RANK_LABEL } from "../../data/labels";

interface Props {
  playerData: TPlayer;
}

function SimilarPlayerRow({ playerData }: Props) {
  const { id, name, rank, points } = playerData;

  return (
    <div className="mb-2 bg-gray-100 rounded-md py-2 px-4">
      <Link
        to={DETAILS_ROUTE}
        className="text-blue-500 text-sm"
        state={{ id: id, data: playerData }}
      >
        {name || "-"}
      </Link>
      <div className="flex mb-1">
        <div className="text-xs mr-2">
          {RANK_LABEL} <b>{rank}</b>
        </div>
        <div className="text-xs">
          {POINTS_LABEL} <b>{points}</b>
        </div>
      </div>
    </div>
  );
}

export default React.memo(SimilarPlayerRow);
