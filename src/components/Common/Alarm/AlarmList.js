import styles from 'styles/Common/Alarm/AlarmContainer.module.scss';
import { FiDelete } from 'react-icons/fi';

const AlarmList = ({
  alarm,
  moveWhenClickAlarm,
  clickDeleteIcon,
  alarmCategoriNum
}) => {
  const selectComp = () => {
    if (alarm.notiCategoryNum === 4 || alarm.notiCategoryNum === 5) return 4;
    else if (alarm.notiCategoryNum === 6) return 2;
    return 1;
  };

  const comp = selectComp();

  return (
    <div className={styles.description}>
      <div className={styles.top}>
        <p
          id={styles.big}
          onClick={() => moveWhenClickAlarm(alarm.url, alarm.no, comp)}
        >
          {alarmCategoriNum(alarm.title)[alarm.notiCategoryNum]}
        </p>
        <FiDelete size={15} onClick={() => clickDeleteIcon(alarm.no)} />
      </div>
      <div
        className={styles.bottom}
        onClick={() => moveWhenClickAlarm(alarm.url, alarm.no, comp)}
      >
        <div>
          <p>작성자 {alarm.sender}</p>
          <p>
            {alarm.content.length > 20
              ? alarm.content.substr(0, 20) + '.....'
              : alarm.content}
          </p>
        </div>
        <span>{alarm.inDate.substr(0, 10)}</span>
      </div>
    </div>
  );
};

export default AlarmList;
