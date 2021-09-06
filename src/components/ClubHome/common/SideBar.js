import styles from "../../../styles/Club/Home/Common/SideBar.module.scss";
import React, { useState } from "react";
import Router from "next/router";
import { HiMenu, HiPencil } from "react-icons/hi";
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlinePicLeft,
  AiOutlineSchedule,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

const SideBar = ({ setComp }) => {
  const [isOpen, setOpen] = useState(true);
  const toggle = () => setOpen((isOpen) => !isOpen);
  const iconSize = 25;
  const movePage = () => {
    Router.push("/manager");
  };

  return (
    <div className={styles.sideBar}>
      <HiMenu id={styles.hamb} onClick={() => toggle()} size="30" />
      <div className={styles.menu} id={isOpen ? styles.show : styles.hide}>
        <div onClick={() => setComp(1)}>
          <AiOutlineHome size={iconSize} />
          <span>우아한 애자일</span>
        </div>
        <div onClick={() => setComp(2)}>
          <AiOutlineNotification size={iconSize} />
          <span>공지 사항</span>
        </div>
        <div onClick={() => setComp(3)}>
          <AiOutlinePicLeft size={iconSize} />
          <span>활동내용</span>
        </div>
        <div onClick={() => setComp(4)}>
          <AiOutlineSchedule size={iconSize} />
          <span>일정</span>
        </div>
        <div onClick={() => setComp(5)}>
          <MdRateReview size={iconSize} />
          <span>동아리 후기</span>
        </div>
        <div onClick={() => setComp(6)}>
          <HiPencil size={iconSize} />
          <span>동아리 지원하기</span>
        </div>
        <div onClick={movePage}>
          <AiOutlineSetting size={iconSize} />
          <span>관리자 창</span>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
