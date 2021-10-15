import React from 'react';
import styles from '../../styles/Club/Lists/ClubListContainer.module.scss';
import { useRouter } from 'next/router';
import getToken from 'utils/getToken';

const ClubList = ({ img, categories, title, clubNo }) => {
  const router = useRouter();

  const onClick = () => {
    if (getToken() === '') alert('로그인 후 이용해주세요.');
    else router.push(`/clubhome/${clubNo}`);
  };

  return (
    <div className={styles.container}>
      <img src={img} alt="동아리" onClick={onClick} />
      <div>
        <p id={styles.desc}>{title}</p>
        <p>#{categories}</p>
      </div>
    </div>
  );
};

export default ClubList;
