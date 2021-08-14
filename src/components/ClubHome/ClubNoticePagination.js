import React from "react";
import styles from "../../styles/Club/Notice/ClubNoticePagination.module.sass";

function ClubNoticePagination() {
  return (
    <ul className={styles.paginationLists}>
      <ol className={styles.start}>처음 페이지</ol>
      <ol className={styles.startArrow}>&lt;</ol>
      <ol className={styles.num}>1</ol>
      <ol className={styles.num}>2</ol>
      <ol className={styles.num}>3</ol>
      <ol className={styles.num}>4</ol>
      <ol className={styles.num}>5</ol>
      <ol className={styles.num}>6</ol>
      <ol className={styles.num}>7</ol>
      <ol className={styles.num}>8</ol>
      <ol className={styles.num}>9</ol>
      <ol className={styles.endArrow}>&gt;</ol>
      <ol className={styles.end}>마지막 페이지</ol>
    </ul>
  );
}

export default ClubNoticePagination;
