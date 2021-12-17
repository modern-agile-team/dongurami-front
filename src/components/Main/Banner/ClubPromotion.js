import React from 'react';
import styles from 'styles/Main/ClubPromotion.module.scss';
import Link from 'next/link';
import { Fade } from 'react-awesome-reveal';

function ClubPromotion() {
  return (
    <div className={styles.container}>
      <div className={styles.wrap}>
        <div className={styles.listWrap}>
          <Fade triggerOnce direction={'up'}>
            <h1 className={styles.list}>
              어떤<div className={styles.club}>동아리</div>가 있는지{' '}
              <div className={styles.br}>궁금했다면</div>
            </h1>
            <div className={styles.btn}>
              <Link href="/clublists" passHref>
                <button className={styles.listBtn}>확인하러 가기</button>
              </Link>
            </div>
          </Fade>
        </div>
        <div className={styles.promoWrap}>
          <Fade triggerOnce direction={'up'}>
            <h1 className={styles.promotion}>
              동아리들의<div className={styles.recruit}>모집시기</div>가{' '}
              <div className={styles.br}>궁금했다면</div>
            </h1>
            <div className={styles.btn}>
              <Link href="/promotion" passHref>
                <button className={styles.promotionBtn}>확인하러 가기</button>
              </Link>
            </div>
          </Fade>
        </div>
      </div>
    </div>
  );
}

export default ClubPromotion;
