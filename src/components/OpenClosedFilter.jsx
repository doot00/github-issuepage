import React from "react";
import styles from "./OpenClosedFilter.module.css";
import cx from "clsx";

export default function OpenClosedFilter({ size, state, onClick, selected }) {
  return (
    <>
      <span
        role="button"
        className={cx(styles.textFilter, { [styles.selected]: selected })}
        onClick={onClick}
      >
        {size} {state}
      </span>
    </>
  );
}
