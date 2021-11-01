import styles from '../../../styles/Common/Alarm/AlarmContainer.module.scss';
import { FaTrashAlt } from 'react-icons/fa';
import AlarmBody from './AlarmBody';

const AlarmContainer = ({
  alarmList,
  showMoreAlarm,
  onAlarmDeleteAll,
  onAlarmPatch,
  alarmShow,
  getAlarmData
}) => {
  return (
    <>
      <div className={styles.rect} />
      <div className={styles.container}>
        <div className={styles.delete}>
          <FaTrashAlt size={13} onClick={onAlarmDeleteAll} />
        </div>
        <AlarmBody
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
