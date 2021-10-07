import React, { useState } from 'react';
import styles from '../../styles/Club/Lists/ClubListContainer.module.scss';
import { useRouter } from 'next/router';

const ClubList = ({ img, categories, title, onClick, clubNo }) => {
  const router = useRouter();
  return (
    <div className={styles.container}>
      <img
        src={img}
        alt="동아리"
        onClick={() => router.push(`/clubhome/club?no=${clubNo}`)}
      />
      <div>
        <p id={styles.desc}>{title}</p>
        <p>#{categories}</p>
      </div>
    </div>
  );
};

export default ClubList;
