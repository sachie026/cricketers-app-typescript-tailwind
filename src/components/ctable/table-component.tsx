import { useEffect, useState, useMemo } from "react";

import { PAGE_SIZE } from "../../data/shared";
import { TPlayer } from "../../pages/players/getPlayers";
import TablePagination from "./table-pagination";
import NoData from "../no-data";
import Table from "./table";

interface Props {
  playersToShow: TPlayer[];
  sortPlayers: (key: string) => void;
}

function TableComponent({ playersToShow, sortPlayers }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const paginatedData = playersToShow.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE
  );

  const isPrevDisabled = useMemo(() => {
    return currentPage === 1;
  }, [currentPage]);

  const isNextDisabled = useMemo(() => {
    return currentPage === totalPages;
  }, [currentPage, totalPages]);

  const nextClickHandler = () => {
    setCurrentPage(currentPage + 1);
  };

  const prevClickHandler = () => {
    setCurrentPage(currentPage - 1);
  };

  useEffect(() => {
    setTotalPages(Math.ceil(playersToShow.length / PAGE_SIZE));
    setCurrentPage(1);
  }, [playersToShow]);

  return (
    <>
      {paginatedData?.length ? (
        <Table paginatedData={paginatedData} sortPlayers={sortPlayers} />
      ) : (
        <NoData />
      )}

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        nextClickHandler={nextClickHandler}
        prevClickHandler={prevClickHandler}
      />
    </>
  );
}

export default TableComponent;
