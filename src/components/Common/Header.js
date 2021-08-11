import React, { useState, useEffect } from "react";
import styles from "./Header.module.sass";

function Header() {
  const [scrollPosition, setScrollPosition] = useState(0);
  const updateScroll = () => {
    setScrollPosition(window.scrollY || document.documentElement.scrollTop);
  };
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
          <li className={styles.headerContent}>서비스 소개</li>
          <li className={styles.headerContent}>공지사항</li>
          <li className={styles.headerContent}>동아리 목록</li>
          <li className={styles.headerContent}>동아리 홍보</li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
