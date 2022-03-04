import React, { useEffect, useRef, useState } from 'react';
import { BiBell } from 'react-icons/bi';
import styles from 'styles/Common/Header/Header.module.scss';
import AlarmContainer from './AlarmContainer';
import Badge from '../Badge';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';
import { changeComp } from 'redux/slices/chageComp';
import { deleteAllAlarm, deleteOneAlarm } from 'apis/alarm';

const Alarm = ({ alarmList, getAlarmData }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmShow, setAlarmShow] = useState(3);

  const ref = useRef(null);

  const dispatch = useDispatch();

  const router = useRouter();

  const showMoreAlarm = () => {
    setAlarmShow(alarmShow + 10);
  };

  const moveWhenClickAlarm = async (url, alarmNumber, comp) => {
    await router.push(`/${url}`);
    dispatch(changeComp(comp));
    onAlarmPatch(alarmNumber);
  };

  const clickDeleteIcon = (alarmNumber) => {
    onAlarmPatch(alarmNumber);
  };

  // 알람 전체 삭제
  const onAlarmDeleteAll = async () => {
    confirm('전체 알람을 삭제하시겠습니까?') &&
      (await deleteAllAlarm()
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    getAlarmData();
  };

  // 알람 일부 삭제
  const onAlarmPatch = async (notiNum) => {
    await deleteOneAlarm(notiNum).catch((err) => alert(err.response.data));
    getAlarmData();
  };

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  const alarmCategoriNum = (data) => {
    const result = data.length > 15 ? data.substr(0, 15) + '...' : data;
    return {
      0: `${result}에 댓글이 달렸습니다.`,
      1: `${result}에 답글이 달렸습니다.`,
      2: `${result}에서 가입이 승인되었습니다.`,
      3: `${result}에서 가입이 거절되었습니다.`,
      4: `${result}에 일정이 생성되었습니다.`,
      5: `${result}에 일정이 수정되었습니다.`,
      6: `${result}에 공지가 생성되었습니다.`,
      7: `${result}에 지원했습니다.`,
      8: `${result}에서 탈퇴했습니다.`,
      9: `${result}에 좋아요가 생겼습니다.`,
      10: `${result}에 좋아요가 생겼습니다.`,
      11: `${result}에 좋아요가 생겼습니다.`,
      12: `공지가 생성되었습니다.`
    };
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.alarm} ref={ref}>
        <div className={styles.bell} onClick={() => setIsOpen(!isOpen)}>
          {alarmList.length > 0 && <Badge count={alarmList.length} />}
          <BiBell />
        </div>
        {isOpen && (
          <AlarmContainer
            alarmList={alarmList}
            showMoreAlarm={showMoreAlarm}
            onAlarmDeleteAll={onAlarmDeleteAll}
            alarmShow={alarmShow}
            moveWhenClickAlarm={moveWhenClickAlarm}
            clickDeleteIcon={clickDeleteIcon}
            alarmCategoriNum={alarmCategoriNum}
          />
        )}
      </div>
    </>
  );
};

export default Alarm;
