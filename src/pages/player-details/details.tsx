import { useLocation, useNavigate } from "react-router-dom";
import { BACK_TO_CRICKETERS_LABEL } from "../../data/labels";
import DetailsRow from "./details-row";
import {
  AGE_key,
  DESCRIPTION_KEY,
  DOB_KEY,
  NAME_KEY,
  POINTS_KEY,
  RANK_KEY,
  TYPE_KEY,
} from "../../data/shared";
import SimilarPlayers from "../../components/similar-players";
import { getAge } from "../../utils/utility-methods";

function PlayerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;
  const { name, description, rank, age, points, type, dob } = state.data;

  return (
    <div className="p-6 w-3/4 bg-white rounded-lg">
      <div
        className="text-sm py-1 ml-6 mb-6 text-blue-500 cursor-pointer"
        onClick={() => navigate("/")}
      >
        {BACK_TO_CRICKETERS_LABEL}
      </div>
      <div className="flex">
        <div className="w-1/3">
          <SimilarPlayers playerData={state.data} />
        </div>
        <div className="w-2/3">
          <div className="flex">
            <DetailsRow title={NAME_KEY} value={name} />
            <DetailsRow title={TYPE_KEY} value={type} />
          </div>

          <div className="flex">
            <DetailsRow title={POINTS_KEY} value={points} />
            <DetailsRow title={RANK_KEY} value={rank} />
          </div>

          <div className="flex">
            <DetailsRow title={AGE_key} value={age || getAge(dob)} />
            <DetailsRow title={DOB_KEY} value={new Date(dob).toDateString()} />
          </div>

          <DetailsRow title={DESCRIPTION_KEY} value={description} />
        </div>
      </div>
    </div>
  );
}

export default PlayerDetails;
