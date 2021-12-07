import React, { useEffect, useRef, useState } from 'react';
import { BiBell } from 'react-icons/bi';
import { getAlarm, putAlarm, patchAlarm } from 'apis/alarm';
import styles from '../../../styles/Common/Header/Header.module.scss';
import AlarmContainer from './AlarmContainer';
import Badge from '../Badge';

const Alarm = ({ token }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [alarmList, setAlarmList] = useState([]);
  const [alarmShow, setAlarmShow] = useState(3);
  const ref = useRef(null);

  const getAlarmData = () => {
    getAlarm().then((res) => setAlarmList(res.data.notifications));
  };

  const showMoreAlarm = () => {
    const temp = alarmShow;
    setAlarmShow(temp + 10);
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
    await patchAlarm(notiNum).catch((err) => alert(err.response.data));
    getAlarmData();
  };

  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setIsOpen(false);
    }
  }

  //영역밖 클릭 시 사이드바 제거

  useEffect(() => {
    if (token) getAlarmData();
  }, [token]);

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <>
      <div className={styles.alarm} ref={ref}>
        <div className={styles.bell} onClick={() => setIsOpen(!isOpen)}>
          {alarmList.length > 0 && <Badge count={alarmList.length} />}
          <BiBell />
        </div>
        {isOpen && (
          <AlarmContainer
            alarmList={alarmList}
            showMoreAlarm={showMoreAlarm}
            onAlarmDeleteAll={onAlarmDeleteAll}
            onAlarmPatch={onAlarmPatch}
            alarmShow={alarmShow}
            getAlarmData={getAlarmData}
          />
        )}
      </div>
    </>
  );
};

export default Alarm;
