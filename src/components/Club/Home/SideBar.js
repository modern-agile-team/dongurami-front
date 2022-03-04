import styles from 'styles/Club/Home/Common/SideBar.module.scss';
import React, { useState, useRef, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { HiPencil } from 'react-icons/hi';
import { getMember } from 'apis/manager';
import {
  AiOutlineHome,
  AiOutlineNotification,
  AiOutlineSchedule,
  AiOutlineSetting,
  AiOutlinePicture
} from 'react-icons/ai';
import { MdRateReview } from 'react-icons/md';
import { useDispatch, useSelector } from 'react-redux';
import { changeComp } from 'redux/slices/chageComp';

const boards = (clubName) => {
  return [
    clubName,
    '공지 사항',
    '활동 내용',
    '일정',
    '동아리 후기',
    '동아리 지원하기',
    '관리자 페이지'
  ];
};

const icons = () => {
  const iconSize = 20;
  return [
    <AiOutlineHome size={iconSize} key="0" />,
    <AiOutlineNotification size={iconSize} key="1" />,
    <AiOutlinePicture size={iconSize} key="2" />,
    <AiOutlineSchedule size={iconSize} key="3" />,
    <MdRateReview size={iconSize} key="4" />,
    <HiPencil size={iconSize} key="5" />,
    <AiOutlineSetting size={iconSize} key="6" />
  ];
};

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

const SideBar = ({ comp }) => {
  const [pageY, setPageY] = useState(0);
  const [hide, setHide] = useState(false);

  const clubName = useSelector((state) => state.clubhome.info);

  const documentRef = useRef(typeof window === 'object' && document);

  const dispatch = useDispatch();
  const router = useRouter();

  const checkManageAuth = async () => {
    getMember(router.query.id)
      .then(() => {
        Router.push(`/manager/${router.query.id}`);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };

  const handleScroll = () => {
    const { pageYOffset } = window;
    const deltaY = pageYOffset - pageY;
    const scrollIsDown = pageYOffset !== 0 && deltaY >= 0;
    setHide(scrollIsDown);
    setPageY(pageYOffset);
  };

  const throttleScroll = throttle(handleScroll, 50);

  useEffect(() => {
    const current = documentRef.current;
    current.addEventListener('scroll', throttleScroll);
    return () => current.removeEventListener('scroll', throttleScroll);
  }, [throttleScroll]);

  if (!clubName) return null;

  return (
    <div className={hide ? styles.hide : styles.sideBar} id={styles.open}>
      <div className={styles.menu} id={styles.show}>
        {boards(clubName.result.clubInfo.name).map((board, i) => {
          return (
            <div
              className={styles.board}
              id={comp === i + 1 ? styles.now : 0}
              onClick={() => {
                i === 6 ? checkManageAuth() : dispatch(changeComp(i + 1));
                window.scrollTo(0, 0);
              }}
              key={i}
            >
              {icons()[i]}
              <span>{board}</span>
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default SideBar;
