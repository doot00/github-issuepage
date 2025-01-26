import styles from "./Button.module.css";
import React from "react";

export default function Button({ style, children }) {
  return (
    <button className={styles.button} style={style}>
      {children}
    </button>
  );
}
