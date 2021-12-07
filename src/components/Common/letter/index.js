import React, { useEffect, useRef, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { getMessageAlarm, deleteMessageAlarm } from 'apis/message';
import styles from '../../../styles/Common/Header/Header.module.scss';
import MessageAlarmContainer from './MessageAlarmCotainer';
import { useRouter } from 'next/router';
import Badge from '../Badge';

const MessageAlarm = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmList, setAlarmList] = useState([]);
  const [alarmShow, setAlarmShow] = useState(3);
  const ref = useRef(null);
  const router = useRouter();

  const getAlarmData = () => {
    getMessageAlarm().then((res) => {
      if (res.data.letters) setAlarmList(res.data.letters);
      else setAlarmList([]);
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
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    getAlarmData(1);
  };

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
            <Badge count={alarmList.length} />
          )}
          <FiMail size={20} />
        </div>
        {isOpen && (
          <MessageAlarmContainer
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
