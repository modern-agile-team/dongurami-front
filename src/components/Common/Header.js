import React, { useState, useEffect } from "react";
import styles from "./Header.module.sass";
import { useRouter } from "next/router";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);

  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };

  const router = useRouter();

  useEffect(() => {
    window.addEventListener("scroll", updateScroll);
  });

  return (
    <header>
      <nav>
        <ul
          className={
            scrollPosition < 1 ? styles.original_header : styles.change_header
          }
        >
          <li className={styles.headerContent} onClick={() => {router.push('/')}}>Main</li>
          <li className={styles.headerContent} onClick={() => {alert('아직 생성되지 않았습니다.')}}>서비스 소개</li>
          <li className={styles.headerContent} onClick={() => {router.push('/notice')}}>공지사항</li>
          <li className={styles.headerContent} onClick={() => {router.push('/clublists')}}>동아리 목록</li>
          <li className={styles.headerContent} onClick={() => {router.push('/promotion')}}>동아리 홍보</li>
          <li className={styles.headerContent} onClick={() => {router.push('/LoginPage')}}>로그인</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
