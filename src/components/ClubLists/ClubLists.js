import React from "react";
import Header from "../Common/Header";
import styles from "../../styles/Board/Club/ClubLists.module.sass";
import ClubListContainer from "./ClubListContainer";
const list = [
  {
    title: "우아한 애자일",
    categories: "IT",
  },
  {
    title: "프리버드",
    categories: "음악",
  },
  {
    title: "둘리",
    categories: "맛집",
  },
  {
    title: "학식",
    categories: "맛집",
  },
  {
    title: "월계국밥",
    categories: "맛집",
  },
  {
    title: "용궁",
    categories: "맛집",
  },
  {
    title: "다온",
    categories: "맛집",
  },
  {
    title: "밥은",
    categories: "맛집",
  },
];
function ClubLists() {
  return (
    <>
      <Header />
      <div className={styles.body}>
        {list.map((lists, idx) => (
          <ClubListContainer list={lists} key={idx} />
        ))}
      </div>
    </>
  );
}

export default ClubLists;
