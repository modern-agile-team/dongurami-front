import React, { useState } from "react";
import styles from "../../styles/Club/Lists/ClubListContainer.module.scss";
import { useRouter } from "next/router";

<<<<<<< HEAD
const ClubList = ({ img, categories, title, clubNum }) => {
=======
const ClubList = ({ img, categories, title, onClick, clubNo }) => {
>>>>>>> 85a0b797b86a43cac5fd2d06f0560eadaf52794c
  const router = useRouter();
  return (
    <div className={styles.container}>
      <img
        src={img}
        alt="동아리"
<<<<<<< HEAD
        onClick={() => router.push(`/clubhome/${clubNum}`)}
=======
        onClick={() => router.push(`/clubhome/${clubNo}`)}
>>>>>>> 85a0b797b86a43cac5fd2d06f0560eadaf52794c
      />
      <div>
        <p id={styles.desc}>{title}</p>
        <p>#{categories}</p>
      </div>
    </div>
  );
};

export default ClubList;
