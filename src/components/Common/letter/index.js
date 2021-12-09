import React, { useEffect, useRef, useState } from 'react';
import { FiMail } from 'react-icons/fi';
import { deleteMessageAlarm } from 'apis/message';
import styles from '../../../styles/Common/Header/Header.module.scss';
import Badge from '../Badge';
import MessageAlarmContainer from './MessageAlarmCotainer';

const MessageAlarm = ({ messageList, getMessage }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmShow, setAlarmShow] = useState(3);
  const ref = useRef(null);

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
    getMessage();
  };

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

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
          {messageList && messageList.length > 0 && (
            <Badge count={messageList.length} />
          )}
          <FiMail size={20} />
        </div>
        {isOpen && (
          <MessageAlarmContainer
            alarmList={messageList}
            showMoreAlarm={showMoreAlarm}
            onAlarmDeleteAll={onAlarmDeleteAll}
            alarmShow={alarmShow}
            getAlarmData={getMessage}
            setIsOpen={setIsOpen}
          />
        )}
      </div>
    </>
  );
};

export default MessageAlarm;
