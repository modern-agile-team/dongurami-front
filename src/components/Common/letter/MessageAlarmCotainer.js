import styles from '../../../styles/MessageAlarm/AlarmContainer.module.scss';
import MessageAlarmBody from './MessageAlarmBody';
import { useEffect, useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import router, { useRouter } from 'next/router';
import { MdOutlineRouter } from 'react-icons/md';

const MessageAlarmContainer = ({
  alarmList,
  showMoreAlarm,
  onAlarmDeleteAll,
  alarmShow,
  getAlarmData,
  setIsOpen
}) => {
  const [isDelete, setIsDelete] = useState(false);
  const onRoute = () => {
    setIsOpen(false);
    router.push('/message');
  };

  useEffect(() => {
    if (isDelete === true) setTimeout(() => setIsDelete(false), 2000);
  }, [isDelete]);

  return (
    <>
      <div className={styles.rect} />
      <div className={styles.container}>
        <div className={styles.delete}>
          <div>{isDelete && <span>알람이 삭제되었습니다.</span>}</div>
          <div>
            <FaTrashAlt size={13} onClick={onAlarmDeleteAll} />
          </div>
        </div>
        <MessageAlarmBody
          setIsDelete={setIsDelete}
          alarmList={alarmList}
          alarmShow={alarmShow}
          showMoreAlarm={showMoreAlarm}
          getAlarmData={getAlarmData}
        />
        <span className={styles.entireMessage} onClick={() => onRoute()}>
          쪽지함 바로가기
        </span>
      </div>
    </>
  );
};

export default MessageAlarmContainer;
