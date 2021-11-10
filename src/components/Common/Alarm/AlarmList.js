import styles from '../../../styles/Common/Alarm/AlarmContainer.module.scss';
import { FiDelete } from 'react-icons/fi';
import Link from 'next/link';
import { useDispatch } from 'react-redux';
import { changeComp } from 'redux/slices/chageComp';
import { useRouter } from 'next/router';

const alarmCategoriNum = {
  0: '댓글이 달렸습니다.',
  1: '답글이 달렸습니다.',
  2: '동아리 가입이 승인되었습니다.',
  3: '동아리 가입이 거절되었습니다.',
  4: '일정이 생성되었습니다.',
  5: '일정이 수정되었습니다.',
  6: '동아리에 공지가 생성되었습니다.'
};

const AlarmList = ({ alarm, onAlarmPatch, setIsDelete }) => {
  const dispatch = useDispatch();
  const router = useRouter();

  const selectComp = () => {
    if (alarm.notiCategoryNum === 4 || alarm.notiCategoryNum === 5) return 4;
    else if (alarm.notiCategoryNum === 6) return 2;
    return 1;
  };

  const moveWhenClickAlarm = async (data) => {
    await router.push(`/${alarm.url}`);
    dispatch(changeComp(selectComp()));
    onAlarmPatch(data);
  };

  const clickDeleteIcon = (data) => {
    setIsDelete(true);
    onAlarmPatch(data);
  };
  return (
    <div className={styles.description}>
      <div className={styles.top}>
        <p id={styles.big} onClick={() => moveWhenClickAlarm(alarm.no)}>
          {alarmCategoriNum[alarm.notiCategoryNum]}
        </p>
        <FiDelete size={15} onClick={() => clickDeleteIcon(alarm.no)} />
      </div>
      <div
        className={styles.bottom}
        onClick={() => moveWhenClickAlarm(alarm.no)}
      >
        <p>{alarm.sender}</p>
        <p>{alarm.inDate.substr(0, 10)}</p>
      </div>
    </div>
  );
};

export default AlarmList;
