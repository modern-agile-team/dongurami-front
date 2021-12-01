import React, { useEffect, useRef, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { getMessageAlarm, deleteMessageAlarm } from 'apis/message';
import styles from '../../../styles/Common/Header/Header.module.scss';
import AlarmContainer from './AlarmContainer';
import { useRouter } from 'next/router';

const MessageAlarm = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmList, setAlarmList] = useState([]);
  const [alarmShow, setAlarmShow] = useState(3);
  const ref = useRef(null);
  const router = useRouter();

  const getAlarmData = () => {
    getMessageAlarm().then((res) => {
      if (res.data.letters) setAlarmList(res.data.letters);
    });
  };

  const showMoreAlarm = () => {
    const temp = alarmShow;
    setAlarmShow(temp + 10);
  };

  // 알람 전체 삭제
  const onAlarmDeleteAll = async () => {
    confirm('전체 알람을 삭제하시겠습니까?') &&
      (await deleteMessageAlarm()
        .then((res) => alert('삭제가 완료되었습니다'))
        .catch((err) => alert(err.response.data.msg)));
    getAlarmData();
  };

  // 알람 일부 삭제

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  //영역밖 클릭 시 사이드바 제거

  useEffect(() => {
    if (token) getAlarmData();
  }, [token, router]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.alarm} ref={ref}>
        <div className={styles.message} onClick={() => setIsOpen(!isOpen)}>
          {alarmList && alarmList.length > 0 && (
            <div className={styles.messagecount}>
              {alarmList.length <= 99 ? (
                <span>{alarmList.length}</span>
              ) : (
                <span>99+</span>
              )}
            </div>
          )}
          <FiMail size={20} />
        </div>
        {isOpen && (
          <AlarmContainer
            alarmList={alarmList}
            showMoreAlarm={showMoreAlarm}
            onAlarmDeleteAll={onAlarmDeleteAll}
            alarmShow={alarmShow}
            getAlarmData={getAlarmData}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default MessageAlarm;
