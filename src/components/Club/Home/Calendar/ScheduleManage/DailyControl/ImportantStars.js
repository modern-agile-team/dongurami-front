import { AiFillStar, AiOutlineStar } from 'react-icons/ai';
import styles from 'styles/Club/Home/Schedule/DailyControl.module.scss';

const ImportantStars = ({ eachSchedule, importantModify }) => {
  return eachSchedule.important ? (
    <AiFillStar
      className={styles.fillStar}
      onClick={() => importantModify(eachSchedule, 0)}
    />
  ) : (
    <AiOutlineStar
      className={styles.outLineStar}
      onClick={() => importantModify(eachSchedule, 1)}
    />
  );
};

export default ImportantStars;
