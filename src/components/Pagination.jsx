import React from "react";
import styles from "./Pagination.module.css";
import cx from "clsx";

export default function Pagination({
  currentPage,
  maxPage,
  onClickPageButton,
}) {
  return (
    <div>
      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === 1}
      >
        {"< Previous"}
      </button>
      {new Array(maxPage).fill(null).map((_, i) => (
        <PageButton
          key={i + 1}
          number={i + 1}
          onClick={onClickPageButton}
          selected={i + 1 === currentPage} // selected된 값에 따라 페이지가 변경된다.
        />
      ))}

      <button
        className={cx(styles.button, styles.blueButton)}
        disabled={currentPage === maxPage}
      >
        {"Next >"}
      </button>
    </div>
  );
}

function PageButton({ number, onClick, selected }) {
  return (
    <button
      className={cx(styles.button, { [styles.selected]: selected })}
      onClick={() => onClick(number)}
    >
      {number}
    </button>
  );
}
