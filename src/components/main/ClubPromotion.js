import React from 'react';
import styles from '../../styles/Main/ClubPromotion.module.scss';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

function ClubPromotion() {
  return (
    <div className={styles.container}>
      <Fade triggerOnce direction={'up'}>
        <h1 className={styles.list}>
          어떤<div className={styles.club}>동아리</div>가 있는지{' '}
          <div className={styles.br}>궁금했다면</div>
        </h1>
        <Link href="/clublists" passHref>
          <button className={styles.listBtn}>Let&apos;s go</button>
        </Link>
      </Fade>
      <Fade triggerOnce direction={'up'}>
        <h1 className={styles.promotion}>
          동아리들의<div className={styles.recruit}>모집시기</div>가{' '}
          <div className={styles.br}>궁금했다면</div>
        </h1>
        <Link href="/promotion" passHref>
          <button className={styles.promotionBtn}>Let&apos;s go</button>
        </Link>
      </Fade>
    </div>
  );
}

export default ClubPromotion;
