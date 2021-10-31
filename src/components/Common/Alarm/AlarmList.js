import styles from '../../../styles/Common/Alarm/AlarmContainer.module.scss';
import { FiDelete } from 'react-icons/fi';
import Link from 'next/link';

const alarmCategoriNum = {
  0: '댓글이 달렸습니다.',
  1: '답글이 달렸습니다.',
  2: '동아리 가입이 승인되었습니다.',
  3: '동아리 가입이 거절되었습니다.',
  4: '새로운 일정이 생성되었습니다.',
  5: '일정이 수정되었습니다.',
  6: '오늘의 일정입니다.',
  7: '동아리 공지가 생성되었습니다.'
};

const AlarmList = ({ alarm, onAlarmPatch }) => {
  return (
    <div className={styles.description}>
      <div className={styles.top}>
        <p id={styles.big}>{alarmCategoriNum[alarm.notificationCategoryNum]}</p>
        <FiDelete
          size={15}
          onClick={() => onAlarmPatch(alarm.notificationNum)}
        />
      </div>
      <Link href={`/${alarm.url}`} passHref>
        <div className={styles.bottom}>
          <p>{alarm.senderId}</p>
          <p>{alarm.inDate.substr(0, 10)}</p>
        </div>
      </Link>
    </div>
  );
};

export default AlarmList;
