import React from "react";

import SortIcon from "../../assets/icons/sort";
import { AGE_key, NAME_KEY, RANK_KEY } from "../../data/shared";

interface Props {
  headerKeys: string[];
  sortPlayers: (key: string) => void;
}

const sortOptionCols = [NAME_KEY, RANK_KEY, AGE_key];

function TableHeader({ headerKeys, sortPlayers }: Props) {
  return (
    <thead>
      <tr>
        {headerKeys.map((key, keyIndex) => {
          return (
            <th
              key={keyIndex}
              className="bg-gray-200 mb-4 text-sm text-left p-2 uppercase"
            >
              {key}
              {sortOptionCols.includes(key) && (
                <SortIcon onClick={() => sortPlayers(key)} />
              )}
            </th>
          );
        })}
      </tr>
    </thead>
  );
}

export default React.memo(TableHeader);
