import { useEffect, useRef } from "react";
import { Link, useSearchParams } from "react-router";
import clsx from "clsx";

import styles from "./Pagination.module.css";

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

  const allPages = Array.from({ length: numberOfPages }, (_, index) => index);

  const prevPage = currentPage - 1;
  let nextPage = currentPage + 1;

  nextPage = nextPage <= numberOfPages ? nextPage : 0;

  return (
    <div className={styles.pagination}>
      {Boolean(prevPage) && (
        <Link to={`/?page=${String(prevPage)}`}>&laquo; Prev</Link>
      )}
      {allPages.map((page) => (
        <Link
          to={`/?page=${String(page + 1)}`}
          key={page}
          className={clsx({ [styles.active]: page + 1 === currentPage })}
        >
          {page + 1}
        </Link>
      ))}
      {Boolean(nextPage) && (
        <Link to={`/?page=${String(nextPage)}`}>Next &raquo;</Link>
      )}
    </div>
  );
}
