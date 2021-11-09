import styles from '../../../styles/Club/Home/Schedule/Calendar.module.scss';
import React, { useCallback } from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import DailyModal from './ScheduleManage/DailyModal';
import Schedule from './Schedule';
import DailyControl from './ScheduleManage/DailyControl';
import ScheduleModify from './ScheduleManage/ScheduleModify';
import RightContainer from './RightContainer';
import MakeTd from './RightComponents/MakeTd';
import { useRouter } from 'next/router';
import { getInfo } from 'apis/calendar';
import { getSchedule } from 'redux/slices/calendar';
import { useDispatch, useSelector } from 'react-redux';

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
  const router = useRouter();
  const Qdata = router.query;
  const colors = ['#ff9d9d', '#ffb482', '#ffee8f', '#a1ffa9', '#b5eaff'];
  const todayData = useSelector((state) => state.calendar.info);
  const dispatch = useDispatch();

  const moveLogin = useCallback(() => router.push('/LoginPage'), [router]);
  //라우팅? setComp?
  const moveHome = useCallback(
    () => router.push(`/clubhome/${Qdata.id}`),
    [router, Qdata.id]
  );

  const today = momentTime;
  const yearMonth = today.format('YYYY-MM');
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();

  const nowMonth = moment().format('YYYY-MM');

  useEffect(() => {
    if (today.format('YYYY-MM') === nowMonth)
      setNowDay(moment().format('YYYY-MM-DD'));
    if (!router.isReady) return;
    dispatch(getSchedule({ clubId: Qdata.id, today: nowMonth }));
    getInfo(Qdata.id, yearMonth)
      .then((res) => setSchedule(res.data.result))
      .catch((err) => {
        alert(err.response.data.msg);
        if (err.response.status === 401) moveLogin();
        else if (err.response.status === 403) moveHome();
      });
  }, [
    today,
    nowMonth,
    router,
    Qdata.id,
    yearMonth,
    moveLogin,
    moveHome,
    dispatch
  ]);

  const inDate = useCallback((startDate, selectedDate, endDate) => {
    return (
      Date.parse(startDate) <= Date.parse(selectedDate) &&
      Date.parse(selectedDate) <= Date.parse(endDate)
    );
  }, []);
  //달력만드는 함수
  const calendarArr = useCallback(() => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <MakeTd
          key={week}
          schedule={schedule}
          today={today}
          week={week}
          setPop={setPop}
          setDate={setDate}
          inDate={inDate}
        />
      );
    }
    return result;
  }, [firstWeek, lastWeek, schedule, today, setPop, setDate, inDate]);

  if (!todayData) return null;

  return (
    <>
      <div className={styles.wrap}>
        <Schedule
          className={styles.scheduleComp}
          schedule={schedule}
          nowDay={nowDay}
          todayData={todayData}
          inDate={inDate}
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
        inDate={inDate}
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
export default React.memo(Calendar);
