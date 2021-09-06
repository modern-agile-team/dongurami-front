import React from "react";
import styles from "../../styles/Club/Lists/ClubLists.module.scss";
import ClubListContainer from "./ClubListContainer";
const list = [
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
];
const ClubList = () => {
  return (
    <div className={styles.container}>
      <div className={styles.activities}>
        {list.map((el) => {
          return (
            <ClubListContainer
              img={el.img}
              title={el.title}
              categories={el.categories}
              key={el.key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClubList;

