import { Link } from "react-router-dom";
import { TPlayer } from "../../pages/players/getPlayers";
import { DETAILS_ROUTE } from "../../data/shared";

interface Props {
  playerData: TPlayer;
}

function SimilarPlayerRow({ playerData }: Props) {
  const { id, name, rank, points } = playerData;

  return (
    <div className="mb-6">
      <Link
        to={DETAILS_ROUTE}
        className="text-blue-500"
        state={{ id: id, data: playerData }}
      >
        {name || "-"}
      </Link>
      <div>Rank: {rank}</div>
      <div>Points: {points}</div>
    </div>
  );
}

export default SimilarPlayerRow;
