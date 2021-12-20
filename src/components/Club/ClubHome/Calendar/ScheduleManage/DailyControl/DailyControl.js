import styles from 'styles/Club/Home/Schedule/DailyControl.module.scss';
import { HiPencil } from 'react-icons/hi';
import { FaTrashAlt } from 'react-icons/fa';
import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import { MdClose } from 'react-icons/md';

const DailyControl = ({
  schedule,
  date,
  setPop,
  pop,
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
          <div className={styles.schedule}>
            {schedule.map((eachScedule, index) => {
              return (
                inDate(eachScedule.startDate, date, eachScedule.endDate) && (
                  <div key={index} className={styles.des}>
                    <div className={styles.importantSchedule}>
                      {eachScedule.important ? (
                        <AiFillStar
                          className={styles.fillStar}
                          onClick={() => importantModify(eachScedule, 0)}
                        />
                      ) : (
                        <AiOutlineStar
                          className={styles.outLineStar}
                          onClick={() => importantModify(eachScedule, 1)}
                        />
                      )}
                      <span key={eachScedule.no}>{eachScedule.title}</span>
                    </div>
                    <div className={styles.edit}>
                      <HiPencil
                        onClick={() => onClickPencil(eachScedule)}
                        className={styles.pencil}
                      />
                      <FaTrashAlt
                        onClick={() => {
                          if (eachScedule.important === 0)
                            onDeleteSchedule(eachScedule);
                          else alert('주요 일정은 삭제 할 수 없습니다.');
                        }}
                        className={styles.delete}
                      />
                    </div>
                  </div>
                )
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyControl;
