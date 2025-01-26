import styles from "./Badge.module.css";
import React from "react";
import cx from "clsx";


// red, blue
export default function Badge({ title, color }) {
  return <span className={cx(styles.badge, styles[color])}>{title}</span>;
}
