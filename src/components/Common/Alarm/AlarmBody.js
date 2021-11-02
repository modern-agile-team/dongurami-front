import styles from '../../../styles/Common/Alarm/AlarmContainer.module.scss';
import AlarmList from './AlarmList';

const AlarmBody = ({
  alarmList,
  alarmShow,
  showMoreAlarm,
  onAlarmPatch,
  setIsDelete
}) => {
  return (
    <div className={styles.alarms}>
      {alarmList.slice(0, alarmShow).map((alarm, index) => {
        return (
          <AlarmList
            key={index}
            alarm={alarm}
            onAlarmPatch={onAlarmPatch}
            setIsDelete={setIsDelete}
          />
        );
      })}
      {alarmList.length > alarmShow && (
        <div className={styles.leftAlarms}>
          <span onClick={showMoreAlarm}>
            {alarmList.slice(alarmShow).length}개의 알람이 더 있습니다
          </span>
        </div>
      )}
    </div>
  );
};

export default AlarmBody;
