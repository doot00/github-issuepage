import React, { useEffect, useState } from "react";
import styles from "./Modal.module.css";
import cx from "clsx";
export default function Modal({
  opened,
  title,
  onClose,
  placeholder,
  searchDataList,
  onClickCell,
}) {
  const [searchValue, setSearchValue] = useState("");
  const [filteredData, setFilteredData] = useState(searchDataList);

  useEffect(() => {
    setFilteredData(searchDataList.filter((item) => item === searchValue));
    //setFilteredData(["Apple"]);
  }, [searchDataList, searchValue]);

  return (
    <>
      <div className={cx(styles.modal, { [styles.opened]: opened })}>
        <div className={styles.header}>
          <span>{title}</span>
          <button onClick={onClose}>X</button>
        </div>
        <div className={styles.input}>
          <input
            placeholder={placeholder}
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
        </div>
        {filteredData.map((data) => (
          <div key={data} onClick={onClickCell} role="button">
            {data}
          </div>
        ))}
      </div>
    </>
  );
}

// portal을 사용해서 modal을 많이 사용한다.
// 컴포넌트를 만드는 것 처럼 제작

// 닫히는 행위를 넣어줘야 한다.
