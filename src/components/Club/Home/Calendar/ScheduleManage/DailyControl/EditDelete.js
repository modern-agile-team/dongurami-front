import { HiPencil } from 'react-icons/hi';
import { FaTrashAlt } from 'react-icons/fa';
import styles from 'styles/Club/Home/Schedule/DailyControl.module.scss';

const EditDelete = ({ eachSchedule, onClickPencil, onDeleteSchedule }) => {
  return (
    <div className={styles.edit}>
      <HiPencil
        onClick={() => onClickPencil(eachSchedule)}
        className={styles.pencil}
      />
      <FaTrashAlt
        onClick={() => {
          if (eachSchedule.important === 0) onDeleteSchedule(eachSchedule);
          else alert('주요 일정은 삭제 할 수 없습니다.');
        }}
        className={styles.delete}
      />
    </div>
  );
};

export default EditDelete;
