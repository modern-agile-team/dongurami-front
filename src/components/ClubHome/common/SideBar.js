import styles from "../../../styles/Club/Home/Common/SideBar.module.scss";
import React, { useState } from "react";
import Router from "next/router";
import { HiMenu } from "react-icons/hi";

const SideBar = ({ setComp }) => {
  const [isOpen, setOpen] = useState(false);
  const toggle = () => setOpen((isOpen) => !isOpen);

  const movePage = () => {
    Router.push("/manager");
  };

  return (
    <div className={styles.sideBar}>
      <ul className={isOpen ? styles.show : styles.hide}>
        <li className={styles.hamb}>
          <HiMenu onClick={() => toggle()} size="50" />
        </li>
        <div className={styles.menu}>
          <li>
            <a onClick={movePage}>관리 페이지</a>
          </li>
          <li>
            <span onClick={() => setComp(1)}>동아리 소개</span>
          </li>
          <li>
            <span onClick={() => setComp(2)}>활동내용</span>
          </li>
          <li>
            <span onClick={() => setComp(3)}>동아리 일정</span>
          </li>
          <li>
            <span onClick={() => setComp(4)}>공지게시판</span>
          </li>
          <li>
            <span onClick={() => setComp(5)}>자유게시판</span>
          </li>
          <li>
            <span onClick={() => setComp(6)}>동아리 후기</span>
          </li>
        </div>
      </ul>
    </div>
  );
};

export default SideBar;
