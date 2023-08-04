import { Link } from "react-router-dom";
import { TPlayer } from "../../pages/players/getPlayers";
import { DETAILS_ROUTE } from "../../data/shared";

interface Props {
  playerData: TPlayer;
}

function SimilarPlayerRow({ playerData }: Props) {
  const { id, name, rank, points } = playerData;

  return (
    <div className="mb-6 bg-gray-100 rounded-md py-2 px-4">
      <Link
        to={DETAILS_ROUTE}
        className="text-blue-500 text-sm"
        state={{ id: id, data: playerData }}
      >
        {name || "-"}
      </Link>
      <div className="text-sm">Rank: {rank}</div>
      <div className="text-sm">Points: {points}</div>
    </div>
  );
}

export default SimilarPlayerRow;
