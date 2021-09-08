import React from "react";
import styles from "../../styles/Main/ClubPromotion.module.scss";
import Link from 'next/link';
import Fade from "react-reveal/Fade";

function ClubPromotion() {

  return (
    <div className={styles.container}>
      <Fade bottom>
        <h1 className={styles.list}>어떤<div className={styles.club}>동아리</div>가 있는지 궁금했다면</h1>
        <Link href="/clublists" passHref>
        <button className={styles.listBtn}>Let&apos;s go</button>
        </Link>
      </Fade>
      <Fade bottom>
        <h1 className={styles.promotion}>그래서 언제<div className={styles.recruit}>모집</div>하나요?</h1>
        <Link href="/promotion" passHref>
        <button className={styles.promotionBtn}>Let&apos;s go</button>
        </Link>
      </Fade>
    </div>
  );
}

export default ClubPromotion;
