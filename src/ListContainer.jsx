import cx from "clsx";
import axios from "axios";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import styles from "./ListContainer.module.css";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import ListFilter from "./components/ListFilter";
import Pagination from "./components/Pagination";
import OpenClosedFilter from "./components/OpenClosedFilter";
import Footer from "./components/Footer";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [checked, setChecked] = useState(false);
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  const maxPage = 10;

  async function getData() {
    const { data } = await axios.get(
      `https://api.github.com/repos/facebook/react/issues`
    );
    setList(data); // data라는 객체 안에 30개 array로 있다.
  }

  useEffect(() => {
    getData();
  }, []); // componentDidMount(); 돔이 그려진 후에 getData가 실행된다.

  return (
    <>
      <div className={styles.listContainer}>
        <div className={styles.topSection}>
          <input
            className={styles.input}
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <Button
            style={{
              fontSize: "14px",
              backgroundColor: "green",
              color: "white",
            }}
          >
            New Issue
          </Button>
        </div>
        <OpenClosedFilters />
        <div className={styles.container}>
          <ListItemLayout className={styles.listFilter}>
            <ListFilter
              onChangeFilter={(filteredData) => {
                // 필터링된 데이터 처리 로직
              }}
            />
          </ListItemLayout>
          {list.map((item) => (
            <ListItem
              key={item.id}
              data={item}
              checked={checked}
              onClickCheckBox={() => setChecked((check) => !checked)}
              badges={item.labels}
            />
          ))}
        </div>
        <div className={styles.paginationContainer}>
          <Pagination
            maxPage={10}
            currentPage={page}
            onClickPageButton={(number) => setPage(number)}
          />
        </div>
        <Footer />
      </div>
    </>
  );
}

function OpenClosedFilters({ data }) {
  const [isOpenMode, setIsOpenMode] = useState(true);
  const openModeDataSize = 1;
  const closeModeDataSize = 2;

  return (
    <>
      <OpenClosedFilter
        size={openModeDataSize}
        state="Open"
        selected={isOpenMode}
        onClick={() => setIsOpenMode(true)}
      />
      <OpenClosedFilter
        size={closeModeDataSize}
        state="Closed"
        selected={!isOpenMode}
        onClick={() => setIsOpenMode(false)}
      />
    </>
  );
}
