import styles from '../../../styles/Club/Home/Schedule/Calendar.module.scss';
import React from 'react';
import { useState, useEffect, useRef } from 'react';
import moment from 'moment';
import DailyModal from './DailyModal';
import Schedule from './Schedule';
import DailyControl from './DailyControl';
import ScheduleModify from './ScheduleModify';
import RightContainer from './RightContainer';
import MakeTd from './MakeTd';
import Router, { useRouter } from 'next/router';
import { getInfo } from 'apis/calendar';

const Calendar = () => {
  const [momentTime, setMoment] = useState(moment());
  const [date, setDate] = useState('');
  const [pop, setPop] = useState('Calendar');
  const [schedule, setSchedule] = useState([]);
  const [no, setNo] = useState(0);
  const [period, setPeriod] = useState([]);
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState('');
  const [nowDay, setNowDay] = useState('');
  const nowDate = useRef();
  const uRouter = useRouter();
  const Qdata = uRouter.query;
  const colors = ['#f7b5b5', '#ffee8f', '#aefff8', '#ffc2fc', '#e2e2e2'];

  const moveLogin = () => {
    Router.push('/LoginPage');
  };

  const moveHome = () => {
    window.location.reload();
  };

  const today = momentTime;
  const yearMonth = today.format('YYYY-MM');
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  let month = new Date();
  let nowMonth = `${month.getMonth() + 1}`;
  if (nowMonth.length === 1) nowMonth = '0' + nowMonth;

  useEffect(() => {
    if (today.format('MM') === nowMonth) setNowDay(nowDate.current.id);
    if (!uRouter.isReady) return;
    getInfo(Qdata.id, yearMonth)
      .then((res) => setSchedule(res.data.result))
      .catch((err) => {
        alert(err.response.data.msg);
        if (
          err.response.data.msg ===
            'JWT 토큰이 존재하지 않습니다. 로그인 후 이용해주세요.' ||
          err.response.data.msg ===
            '유효 시간이 만료된 토큰입니다. 다시 로그인 후 이용해주세요.'
        )
          moveLogin();
        else if (
          err.response.data.msg === '해당 동아리에 가입하지 않았습니다.' ||
          err.response.data.msg === '존재하지 않는 동아리입니다.'
        )
          moveHome();
      });
  }, [uRouter, momentTime, Qdata.id, nowMonth, today, yearMonth]);

  //달력만드는 함수
  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <MakeTd
          schedule={schedule}
          nowDate={nowDate}
          today={today}
          week={week}
          setPop={setPop}
          setDate={setDate}
        />
      );
    }
    return result;
  };
  return (
    <>
      <div className={styles.wrap}>
        <Schedule
          className={styles.scheduleComp}
          schedule={schedule}
          nowDay={nowDay}
        />
        <RightContainer
          className={styles.rightContainer}
          setMoment={setMoment}
          momentTime={momentTime}
          today={today}
          setPop={setPop}
          calendarArr={calendarArr}
        />
      </div>
      <DailyModal
        Qdata={Qdata}
        colors={colors}
        setSchedule={setSchedule}
        setPop={setPop}
        today={today}
        pop={pop}
      />
      <DailyControl
        Qdata={Qdata}
        setNo={setNo}
        schedule={schedule}
        date={date}
        setPop={setPop}
        pop={pop}
        setPeriod={setPeriod}
        setTitle={setTitle}
        setColor={setColor}
        today={today}
        setSchedule={setSchedule}
      />
      <ScheduleModify
        Qdata={Qdata}
        today={today}
        setSchedule={setSchedule}
        title={title}
        period={period}
        no={no}
        setPop={setPop}
        pop={pop}
        color={color}
        colors={colors}
      />
    </>
  );
};
export default Calendar;
