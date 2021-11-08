import styles from '../../../styles/Common/Alarm/AlarmContainer.module.scss';
import { FaTrashAlt } from 'react-icons/fa';
import AlarmBody from './AlarmBody';
import { useEffect, useState } from 'react';

const AlarmContainer = ({
  alarmList,
  showMoreAlarm,
  onAlarmDeleteAll,
  onAlarmPatch,
  alarmShow,
  getAlarmData
}) => {
  const [isDelete, setIsDelete] = useState(false);

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
        <AlarmBody
          setIsDelete={setIsDelete}
          alarmList={alarmList}
          alarmShow={alarmShow}
          showMoreAlarm={showMoreAlarm}
          getAlarmData={getAlarmData}
          onAlarmPatch={onAlarmPatch}
        />
      </div>
    </>
  );
};

export default AlarmContainer;
