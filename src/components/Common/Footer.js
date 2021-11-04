import React from 'react';
import styles from '../../styles/Common/Footer.module.scss';
import { SiNotion } from 'react-icons/si';
import ReactTooltip from 'react-tooltip';

export default function Footer() {
  const goToNotion = () => {
    window.open(
      'https://www.notion.so/e30b5df25a044809823784f0fee40686',
      '_blank'
    );
  };

  const goToInduk = () => {
    window.open('https://www.induk.ac.kr/KR/index.do', '_blank');
  };

  const thisYear = () => {
    const year = new Date().getFullYear();
    return year;
  };

  return (
    <div className={styles.footer}>
      <div className={styles.wrap}>
        <div className={styles.btn}>
          <SiNotion
            onClick={goToNotion}
            className={styles.notion}
            data-tip="우아한 애자일 소개"
            data-type="light"
            data-border="true"
            data-border-color="#bbbbbb"
          />
          <ReactTooltip effect="solid" />
          <img
            onClick={goToInduk}
            className={styles.induk}
            data-tip="인덕대학교"
            data-place="bottom"
            data-type="light"
            data-border="true"
            data-border-color="#bbbbbb"
            alt="인덕대학교"
            src="https://wooahan-agile.s3.ap-northeast-2.amazonaws.com/HomePage/induk-icon.png"
          />
          <ReactTooltip effect="solid" />
        </div>
        <div className={styles.copyright}>
          <span>&copy; {thisYear()} Wooahan Agile</span>
        </div>
      </div>
    </div>
  );
}
