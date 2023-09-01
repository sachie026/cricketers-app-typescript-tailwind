import { Link } from "react-router-dom";

import { TPlayer } from "../../pages/players/getPlayers";
import { DETAILS_ROUTE, NAME_KEY, TYPE_KEY, typeObj } from "../../data/shared";

interface Props {
  rowData: TPlayer;
  colKey: string;
  index: number;
}

interface Map {
  [key: string]: string | undefined;
}

function TableCol({ rowData, colKey, index }: Props) {
  const { id } = rowData;
  const isNameCol = colKey === NAME_KEY;
  const isTypeCol = colKey === TYPE_KEY;
  const columnVal = (rowData as Map)[colKey];

  return (
    <td className="p-2" key={`${index}${colKey}`}>
      <Link
        to={DETAILS_ROUTE}
        state={{ id: id, data: rowData }}
        data-testid={`${isNameCol ? "name-col" : ""}`}
        className={`${isNameCol ? "cursor-pointer text-blue-500" : ""}`}
      >
        {isTypeCol && columnVal ? typeObj[columnVal] : columnVal || "-"}
      </Link>
    </td>
  );
}

export default TableCol;
