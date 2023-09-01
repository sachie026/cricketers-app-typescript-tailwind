import TableHeader from "../table-header";
import TableRow from "../table-row";

import { TABLE_HEADER_KEYS } from "../../data/shared";
import { TPlayer } from "../../pages/players/getPlayers";

interface Props {
  paginatedData: TPlayer[];
  sortPlayers: (key: string) => void;
}

function Table({ paginatedData, sortPlayers }: Props) {
  return (
    <table className="w-full border-b">
      <TableHeader headerKeys={TABLE_HEADER_KEYS} sortPlayers={sortPlayers} />
      <tbody className="p-4">
        {paginatedData.map((player: TPlayer, index: number) => {
          const { id } = player;
          return (
            <TableRow
              key={id}
              rowData={player}
              headerKeys={TABLE_HEADER_KEYS}
            />
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
