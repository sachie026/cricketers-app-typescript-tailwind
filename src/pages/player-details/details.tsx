import { useLocation, useNavigate } from "react-router-dom";

import { BACK_TO_CRICKETERS_LABEL } from "../../data/labels";

import SimilarPlayers from "../../components/similar-players";
import BackIcon from "../../assets/icons/back-arrow";
import DetailsContent from "./details-content";

function PlayerDetails() {
  const location = useLocation();
  const navigate = useNavigate();
  const { state } = location;

  const goBack = () => {
    navigate("/");
  };

  return (
    <div className="p-6 w-3/4 bg-white rounded-lg">
      <div
        className="text-sm py-1 ml-6 mb-12 text-blue-500 cursor-pointer flex items-center"
        onClick={goBack}
      >
        <BackIcon text={BACK_TO_CRICKETERS_LABEL} />
      </div>
      <div className="flex flex-col md:flex-row">
        <SimilarPlayers playerData={state.data} />
        <DetailsContent data={state.data} />
      </div>
    </div>
  );
}

export default PlayerDetails;
