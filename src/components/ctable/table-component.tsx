import { useEffect, useState, useMemo } from "react";

import { PAGE_SIZE, TABLE_HEADER_KEYS } from "../../data/shared";
import { TPlayer } from "../../pages/players/getPlayers";
import TableHeader from "../table-header";
import TableRow from "../table-row";
import TablePagination from "./table-pagination";
import NoData from "../no-data";

interface Props {
  playersToShow: TPlayer[];
  sortPlayers: (key: string) => void;
}

function TableComponent({ playersToShow, sortPlayers }: Props) {
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [totalPages, setTotalPages] = useState<number>(0);

  const paginatedData = playersToShow.slice(
    (currentPage - 1) * PAGE_SIZE,
    currentPage * PAGE_SIZE - 1
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
    <div>
      <table className="w-full border-b">
        <TableHeader headerKeys={TABLE_HEADER_KEYS} sortPlayers={sortPlayers} />
        <tbody className="p-4">
          {paginatedData?.length ? (
            paginatedData.map((player: TPlayer, index: number) => {
              const { id } = player;
              return (
                <TableRow
                  key={id}
                  rowData={player}
                  headerKeys={TABLE_HEADER_KEYS}
                />
              );
            })
          ) : (
            <NoData />
          )}
        </tbody>
      </table>

      <TablePagination
        currentPage={currentPage}
        totalPages={totalPages}
        isPrevDisabled={isPrevDisabled}
        isNextDisabled={isNextDisabled}
        nextClickHandler={nextClickHandler}
        prevClickHandler={prevClickHandler}
      />
    </div>
  );
}

export default TableComponent;
