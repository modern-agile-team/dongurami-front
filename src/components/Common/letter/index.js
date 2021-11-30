import React, { useEffect, useRef, useState } from 'react';
import { TiMessages } from 'react-icons/ti';
import { getMessageAlarm, deleteMessageAlarm } from 'apis/message';
import styles from '../../../styles/Common/Header/Header.module.scss';
import AlarmContainer from './AlarmContainer';

const MessageAlarm = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmList, setAlarmList] = useState([]);
  const [alarmShow, setAlarmShow] = useState(3);
  const ref = useRef(null);

  const getAlarmData = () => {
    getMessageAlarm().then((res) => setAlarmList(res.data.letters));
  };

  const showMoreAlarm = () => {
    const temp = alarmShow;
    setAlarmShow(temp + 10);
  };

  // 알람 전체 삭제
  const onAlarmDeleteAll = async () => {
    confirm('전체 알람을 삭제하시겠습니까?') &&
      (await deleteMessageAlarm()
        .then((res) => alert(res.data.msg))
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
  }, [token]);

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
          {alarmList.length > 0 && (
            <div className={styles.messagecount}>
              {alarmList.length <= 99 ? (
                <span>{alarmList.length}</span>
              ) : (
                <span>99+</span>
              )}
            </div>
          )}
          <TiMessages size={24} />
        </div>
        {isOpen && (
          <AlarmContainer
            alarmList={alarmList}
            showMoreAlarm={showMoreAlarm}
            onAlarmDeleteAll={onAlarmDeleteAll}
            alarmShow={alarmShow}
            getAlarmData={getAlarmData}
          />
        )}
      </div>
    </>
  );
};

export default MessageAlarm;
