import styles from "./Badge.module.css";

// labels = { 객체 정보 }

export default function Badge({ color, name }) {
  return (
    <span className={styles.badge} style={{ background: `#${color}` }}>
      {name}
    </span>
  );
}
