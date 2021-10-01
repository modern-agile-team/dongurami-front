import styles from "../../../styles/Club/Home/Common/SideBar.module.scss";
import React, { useState, useRef, useEffect } from "react";
import Router from "next/router";
import { HiPencil } from "react-icons/hi";
import { BsLayoutSidebar } from "react-icons/bs";
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlinePicLeft,
  AiOutlineSchedule,
  AiOutlineSetting,
} from "react-icons/ai";
import { MdRateReview } from "react-icons/md";

const iconSize = 25;

const board = [
  "우아한 애자일",
  "공지 사항",
  "활동 내용",
  "일정",
  "동아리 후기",
  "동아리 지원하기",
  "관리자 페이지",
];

const icons = [
  <AiOutlineHome size={iconSize} key="0" />,
  <AiOutlineNotification size={iconSize} key="1" />,
  <AiOutlinePicLeft size={iconSize} key="2" />,
  <AiOutlineSchedule size={iconSize} key="3" />,
  <MdRateReview size={iconSize} key="4" />,
  <HiPencil size={iconSize} key="5" />,
  <AiOutlineSetting size={iconSize} key="6" />,
];

const throttle = (callback, waitTime) => {
  let timerId = null;
  return (e) => {
    if (timerId) return;
    timerId = setTimeout(() => {
      callback.call(this, e);
      timerId = null;
    }, waitTime);
  };
};

const SideBar = ({ setComp, comp }) => {
  const [isOpen, setOpen] = useState(true);
  const [pageY, setPageY] = useState(0);
  const [hide, setHide] = useState(false);

  const documentRef = useRef(typeof window === "object" && document);

  const toggle = () => setOpen(!isOpen);

  const movePage = () => {
    Router.push("/manager");
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const hide = pageYOffset !== 0 && deltaY >= 0;
    setHide(hide);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    documentRef.current.addEventListener("scroll", throttleScroll);
    return () =>
      documentRef.current.removeEventListener("scroll", throttleScroll);
  }, [pageY]);

  return (
    <div
      className={hide ? styles.hide : styles.sideBar}
      id={isOpen ? styles.open : styles.close}
    >
      <div className={styles.menu} id={isOpen ? styles.show : styles.hide}>
        {board.map((el, i) => {
          return (
            <div
              id={comp === i + 1 ? styles.now : 0}
              onClick={() => {
                i === 6 ? movePage() : setComp(i + 1);
                window.scrollTo(0, 0);
              }}
              key={i}
            >
              {icons[i]}
              <span>{el}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
