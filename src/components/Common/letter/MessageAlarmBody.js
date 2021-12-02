import styles from '../../../styles/MessageAlarm/AlarmContainer.module.scss';
import MessageAlarmList from './MessageAlarmList';

const AlarmBody = ({ alarmList, alarmShow, showMoreAlarm, setIsDelete }) => {
  return (
    <div className={styles.alarms}>
      {alarmList.length > 0 ? (
        alarmList.slice(0, alarmShow).map((alarm) => {
          return (
            <MessageAlarmList
              key={alarm.no}
              alarm={alarm}
              setIsDelete={setIsDelete}
            />
          );
        })
      ) : (
        <span>생성된 쪽지가 없습니다.</span>
      )}
      {alarmList.length > alarmShow && (
        <div className={styles.leftAlarms}>
          <span onClick={showMoreAlarm}>
            {alarmList.slice(alarmShow).length}개의 쪽지가 더 있습니다.
          </span>
        </div>
      )}
    </div>
  );
};

export default AlarmBody;
