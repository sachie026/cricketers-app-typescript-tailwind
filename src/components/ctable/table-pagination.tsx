import {
  NEXT_LABEL,
  PREV_LABEL,
  PAGE_LABEL,
  OF_LABEL,
} from "../../data/labels";

interface Props {
  isPrevDisabled: boolean;
  isNextDisabled: boolean;
  prevClickHandler: () => void;
  nextClickHandler: () => void;
  currentPage: number;
  totalPages: number;
}

function TablePagination({
  isPrevDisabled,
  isNextDisabled,
  prevClickHandler,
  nextClickHandler,
  currentPage,
  totalPages,
}: Props) {
  return (
    <div className="mt-4 mr-1 flex justify-end items-center">
      <div className="mr-8 text-sm text-gray-600">
        {`${PAGE_LABEL} ${currentPage} ${OF_LABEL} ${totalPages}`}
      </div>
      <button
        className={`text-sm border py-1 px-2 ${
          isPrevDisabled ? "text-gray-400" : "text-blue-500"
        }`}
        onClick={prevClickHandler}
        disabled={currentPage === 1}
      >
        {PREV_LABEL}
      </button>
      <button
        className={`text-sm border py-1 px-2 ${
          isNextDisabled ? "text-gray-400" : "text-blue-500"
        }`}
        onClick={nextClickHandler}
        disabled={currentPage === totalPages}
      >
        {NEXT_LABEL}
      </button>
    </div>
  );
}

export default TablePagination;
