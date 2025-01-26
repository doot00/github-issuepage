import React from "react";
import cx from "clsx";
import styles from "./ListItemLayout.module.css";

export default function ListItemLayout({ children, className }) {
  // children이 ListItem에 들어가서 나올 것이다.
  return (
    <div className={cx(styles.wrapper, className)}>
      <input type="checkbox" className={styles.checkbox} />
      {children}
    </div>
  );
}
