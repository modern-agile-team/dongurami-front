import styles from '../../../styles/MessageAlarm/AlarmContainer.module.scss';
import { FiDelete } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const AlarmList = ({ alarm, setIsDelete }) => {
  const router = useRouter();

  const clickAlarm = () => {
    router.push(`/${alarm.url}`);
  };

  return (
    <div className={styles.description}>
      <div className={styles.top}>
        <p id={styles.big} onClick={clickAlarm}>
          쪽지가 도착했습니다
        </p>
        <p>작성자 {alarm.name}</p>
      </div>
      <div className={styles.bottom} onClick={clickAlarm}>
        <div>
          <p>{alarm.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AlarmList;
