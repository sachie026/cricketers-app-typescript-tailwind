import React from "react";

import { TPlayer } from "../../pages/players/getPlayers";
import TableCol from "../table-col";

interface Props {
  rowData: TPlayer;
  headerKeys: string[];
}

function TableRow({ rowData, headerKeys }: Props) {
  return (
    <tr data-testid="table-row">
      {headerKeys.map((key, index) => {
        return (
          <TableCol
            index={index}
            key={`${index}${key}`}
            colKey={key}
            rowData={rowData}
          />
        );
      })}
    </tr>
  );
}

export default React.memo(TableRow);
