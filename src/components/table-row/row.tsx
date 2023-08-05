import React from "react";
import { Link } from "react-router-dom";

import { TPlayer } from "../../pages/players/getPlayers";
import { DETAILS_ROUTE, NAME_KEY } from "../../data/shared";

interface Props {
  rowData: TPlayer;
  headerKeys: string[];
}

interface Map {
  [key: string]: string | undefined;
}

function TableRow({ rowData, headerKeys }: Props) {
  const { id } = rowData;

  return (
    <tr data-testid="table-row">
      {headerKeys.map((key, index) => {
        const isNameCol = key === NAME_KEY;
        return (
          <td className="p-2" key={`${index}${key}`}>
            <Link
              to={DETAILS_ROUTE}
              state={{ id: id, data: rowData }}
              className={`${isNameCol ? "cursor-pointer text-blue-500" : ""}`}
            >
              {(rowData as Map)[key] || "-"}
            </Link>
          </td>
        );
      })}
    </tr>
  );
}

export default TableRow;
