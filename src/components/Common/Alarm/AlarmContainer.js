import styles from '../../../styles/Common/Alarm/AlarmContainer.module.scss';
import { FaTrashAlt } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import { getAlarm, putAlarm, patchAlarm } from 'apis/alarm';
import AlarmBody from './AlarmBody';

const AlarmContainer = () => {
  const [alarmList, setAlarmList] = useState([]);
  const [alarmShow, setAlarmShow] = useState(3);

  const showMoreAlarm = () => {
    const temp = alarmShow;
    setAlarmShow(temp + 3);
  };

  // 알람 불러오기
  const getAlarmData = () => {
    getAlarm()
      .then((res) => setAlarmList(res.data.notifications))
      .catch((err) => alert(err.response.data.msg));
  };

  // 알람 전체 삭제
  const onAlarmDeleteAll = async () => {
    confirm('전체 알람을 삭제하시겠습니까?') &&
      (await putAlarm()
        .then((res) => alert(res.data.msg))
        .catch((err) => alert(err.response.data.msg)));
    getAlarmData();
  };
  // 알람 일부 삭제
  const onAlarmPatch = async (notiNum) => {
    await patchAlarm(notiNum).catch((err) => console.log(err.response.data));
    getAlarmData();
  };

  useEffect(() => {
    getAlarmData();
  }, []);

  return (
    <>
      <div className={styles.rect} />
      <div className={styles.container}>
        <div className={styles.delete}>
          <FaTrashAlt size={13} onClick={onAlarmDeleteAll} />
        </div>
        <AlarmBody
          alarmList={alarmList}
          alarmShow={alarmShow}
          showMoreAlarm={showMoreAlarm}
          getAlarmData={getAlarmData}
          onAlarmPatch={onAlarmPatch}
        />
      </div>
    </>
  );
};

export default AlarmContainer;
