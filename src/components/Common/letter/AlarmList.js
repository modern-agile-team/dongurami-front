import styles from '../../../styles/MessageAlarm/AlarmContainer.module.scss';
import { FiDelete } from 'react-icons/fi';
import { useDispatch } from 'react-redux';
import { useRouter } from 'next/router';

const AlarmList = ({ alarm, setIsDelete }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const clickDeleteIcon = (data) => {
    setIsDelete(true);
  };

  const clickAlarm = () => {
    router.push(`/${alarm.url}`);
  };

  return (
    <div className={styles.description}>
      <div className={styles.top}>
        <p id={styles.big} onClick={clickAlarm}>
          쪽지가 도착했습니다
        </p>
        <FiDelete size={15} onClick={() => clickDeleteIcon(alarm.no)} />
      </div>
      <div className={styles.bottom} onClick={clickAlarm}>
        <div>
          <p>작성자 {alarm.name}</p>
          <p>{alarm.description}</p>
        </div>
      </div>
    </div>
  );
};

export default AlarmList;
