import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import clsx from "clsx";

import styles from "./Pagination.module.css";


function getPageRange(currentPage = 0, totalPages = 0, numberOfVisiblePages = 5) {
  let firstPage = currentPage - Math.floor(numberOfVisiblePages / 2);
  let lastPage = currentPage + Math.floor(numberOfVisiblePages / 2);

  if(firstPage < 1) {
    firstPage = 1;
  }

  if(lastPage > totalPages) {
    lastPage = totalPages;
  }

  const res = [];
  for (let i = firstPage; i <= lastPage; i++) {
    res.push(i);
  }
  return res;
}

type Props = {
  totalItemCount: number;
  itemsPerPage?: number;
  onPageChange?: (page: number) => void;
};

export function Pagination({
  totalItemCount,
  itemsPerPage = 10,
  onPageChange,
}: Props) {
  const numberOfPages = Math.ceil(totalItemCount / itemsPerPage);
  const [searchParams] = useSearchParams();
  const oldPage = useRef(0);

  const currentPage = Number(searchParams.get("page")) || 1;

  useEffect(() => {
    let newPage = 1;
    if (oldPage.current !== currentPage) {
      newPage = currentPage;
    }

    oldPage.current = newPage;
    onPageChange?.(newPage);
  }, [currentPage, onPageChange]);

  
  const prevPage = currentPage - 1;
  let nextPage = currentPage + 1;
  
  nextPage = nextPage <= numberOfPages ? nextPage : 0;
  
  const allPages = getPageRange(currentPage, numberOfPages);

  return (
    <div className={styles.pagination}>
      {Boolean(prevPage) && (
        <Link to={`/?page=${String(prevPage)}`}>&laquo; Prev</Link>
      )}
      {allPages.map((page) => (
        <Link
          to={`/?page=${String(page)}`}
          key={page}
          className={clsx({ [styles.active]: page === currentPage })}
        >
          {page}
        </Link>
      ))}
      {Boolean(nextPage) && (
        <Link to={`/?page=${String(nextPage)}`}>Next &raquo;</Link>
      )}
    </div>
  );
}
