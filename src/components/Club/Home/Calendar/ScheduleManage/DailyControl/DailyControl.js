import styles from 'styles/Club/Home/Schedule/DailyControl.module.scss';
import { MdClose } from 'react-icons/md';
import EachSchedule from './EachSchedule';

const DailyControl = ({
  schedule,
  date,
  setPop,
  inDate,
  onClickPencil,
  onDeleteSchedule,
  importantModify
}) => {
  return (
    <div className={styles.wrap} onClick={() => setPop('Calendar')}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{date} 일정</h3>
        </div>
        <MdClose
          className={styles.closeBtn}
          onClick={() => setPop('Calendar')}
        />
        <div className={styles.body}>
          <EachSchedule
            schedule={schedule}
            inDate={inDate}
            onClickPencil={onClickPencil}
            onDeleteSchedule={onDeleteSchedule}
            importantModify={importantModify}
            date={date}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyControl;
