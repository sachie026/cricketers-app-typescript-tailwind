import { useEffect, useState } from "react";
import { SIMILA_PLAYERS_LABEL } from "../../data/labels";
import getPlayers, { TPlayer } from "../../pages/players/getPlayers";
import SimilarPlayerRow from "./similar-player-row";
import NoData from "../no-data";
import { MAX_SIMILAR_PLAYERS_TO_SHOW } from "../../data/shared";

interface Props {
  playerData: TPlayer;
}

function SimilarPlayers({ playerData }: Props) {
  const [similarPlayers, setSimilarPlayers] = useState<TPlayer[]>([]);
  const fetchPlayers = () => {
    getPlayers().then((res: TPlayer[]) => {
      setSimilarPlayers(res);
    });
  };

  useEffect(() => {
    fetchPlayers();
  }, []);

  const similarPlayersToShow = similarPlayers.filter(
    (player) => player.type === playerData.type && player.id !== playerData.id
  );

  const maxSimilarPlayersToShow = similarPlayersToShow.slice(
    0,
    MAX_SIMILAR_PLAYERS_TO_SHOW
  );

  return (
    <div className="p-6 pt-0 w-full md:w-1/3 bg-white rounded-lg">
      <div className="font-bold text-md  mb-4">{SIMILA_PLAYERS_LABEL}</div>
      <div className="flex flex-col">
        {maxSimilarPlayersToShow.length ? (
          maxSimilarPlayersToShow.map((player: TPlayer, index: number) => {
            return (
              <SimilarPlayerRow playerData={player} key={`splayer-${index}`} />
            );
          })
        ) : (
          <NoData />
        )}
      </div>
    </div>
  );
}

export default SimilarPlayers;
