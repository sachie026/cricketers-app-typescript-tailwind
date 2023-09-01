import React from "react";
import { DETAILS_PAGE_TITLE } from "../../data/labels";
import {
  NAME_KEY,
  POINTS_KEY,
  TYPE_KEY,
  RANK_KEY,
  AGE_key,
  DOB_KEY,
  DESCRIPTION_KEY,
  typeObj,
} from "../../data/shared";
import { getAge } from "../../utils/utility-methods";
import { TPlayer } from "../players/getPlayers";
import DetailsRow from "./details-row";

interface Props {
  data: TPlayer;
}

function DetailsContent({ data }: Props) {
  const { name, description, rank, age, points, type, dob } = data;

  return (
    <div className="w-full md:w-2/3">
      <div className="text-2xl font-extrabold mb-8 ml-6">
        {DETAILS_PAGE_TITLE}
      </div>
      <div className="flex">
        <DetailsRow title={NAME_KEY} value={name || "-"} />
        <DetailsRow title={TYPE_KEY} value={(type && typeObj[type]) || "-"} />
      </div>

      <div className="flex">
        <DetailsRow title={POINTS_KEY} value={points?.toString() || "-"} />
        <DetailsRow title={RANK_KEY} value={rank?.toString() || "-"} />
      </div>

      <div className="flex">
        <DetailsRow
          title={AGE_key}
          value={age?.toString() || getAge(dob)?.toString() || "-"}
        />
        <DetailsRow
          title={DOB_KEY}
          value={dob ? new Date(dob).toDateString() : "-"}
        />
      </div>

      <DetailsRow
        title={DESCRIPTION_KEY}
        value={description || "-"}
        classes="border-t text-justify"
      />
    </div>
  );
}

export default React.memo(DetailsContent);
