import styles from 'styles/Club/Home/Schedule/DailyControl.module.scss';
import EditDelete from './EditDelete';
import ImportantStars from './ImportantStars';

const EachSchedule = ({
  schedule,
  inDate,
  onClickPencil,
  onDeleteSchedule,
  importantModify,
  date
}) => {
  return (
    <div className={styles.schedule}>
      {schedule.map((eachSchedule, index) => {
        return (
          inDate(eachSchedule.startDate, date, eachSchedule.endDate) && (
            <div key={index} className={styles.des}>
              <div className={styles.importantSchedule}>
                <ImportantStars
                  eachSchedule={eachSchedule}
                  importantModify={importantModify}
                />
                <span key={eachSchedule.no}>{eachSchedule.title}</span>
              </div>
              <EditDelete
                eachSchedule={eachSchedule}
                onClickPencil={onClickPencil}
                onDeleteSchedule={onDeleteSchedule}
              />
            </div>
          )
        );
      })}
    </div>
  );
};

export default EachSchedule;
