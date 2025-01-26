import cx from "clsx";
import React, { useEffect, useState } from "react";
import Button from "./components/Button";
import styles from "./ListContainer.module.css";
import ListItem from "./components/ListItem";
import ListItemLayout from "./components/ListItemLayout";
import ListFilter from "./components/ListFilter";
import Pagination from "./components/Pagination";
import OpenClosedFilter from "./components/OpenClosedFilter";

export default function ListContainer() {
  const [inputValue, setInputValue] = useState("is:pr is:open");
  const [list, setList] = useState([]);
  const [page, setPage] = useState(1);
  // const data = getData();
  // const opendData = data.filter((d) => d.state === 'open');
  // const closedData = data.filter((d) => d.state === 'closed');

  // const MAX_PAGE = getData().totalCount // = 30 / 100 = 3.3333 = 4페이지까지 그려야 한다.

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
        <ListItemLayout className={styles.listFilters}>
          <ListFilter
            onChangeFilter={(filteredData) => {
              // 필터링 된 요소에 맞게 데이터를 불러온다.
              // const data = getData('필터링된 정보');
              // setList(data);
            }}
          />
        </ListItemLayout>
        <div className={styles.container}>
          {list.map((listItem, index) => (
            <ListItem
              key={index}
              badges={[
                {
                  color: "red",
                  title: "Bug2",
                },
              ]}
            />
          ))}
        </div>
      </div>
      <div className={styles.paginationContainer}>
        <Pagination
          maxPage={10}
          currentPage={page}
          onClickPageButton={(number) => setPage(number)}
        />
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
