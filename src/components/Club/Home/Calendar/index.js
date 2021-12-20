import styles from 'styles/Club/Home/Schedule/Calendar.module.scss';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import moment from 'moment';
import DailyModal from './ScheduleManage/DailyModal';
import Schedule from './Schedule';
import DailyControl from './ScheduleManage/DailyControl/DailyControl';
import ScheduleModify from './ScheduleManage/ScheduleModify';
import RightContainer from './RightContainer';
import MakeTd from './RightComponents/MakeTd';
import { useRouter } from 'next/router';
import {
  getInfo,
  modifySchedule,
  deleteSchedule,
  importantSchedule,
  addSchedule
} from 'apis/calendar';
import { getSchedule } from 'redux/slices/calendar';
import { useDispatch, useSelector } from 'react-redux';

const Calendar = () => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const [momentTime, setMoment] = useState(moment());
  const [date, setDate] = useState('');
  const [pop, setPop] = useState('Calendar');
  const [schedule, setSchedule] = useState([]);
  const [no, setNo] = useState(0);
  const [period, setPeriod] = useState([]);
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState('#FFFFFF');
  const [nowDay, setNowDay] = useState('');
  const [category, setCategory] = useState();

  const titleRef = useRef();
  const router = useRouter();

  const today = momentTime;

  //ScheduleModify
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [colorCode, setColorCode] = useState();
  const [newTitle, setNewTitle] = useState();
  //수정버튼 함수
  const onClickModifyBtn = async () => {
    if (newTitle.replace(/ /g, '').length === 0) setNewTitle(title);
    if (newTitle.length > 50) alert('제목은 50자 이하여야 합니다.');
    else {
      await modifySchedule(Qdata.id, no, {
        colorCode: colorCode,
        title: newTitle,
        startDate: startDate,
        endDate: endDate,
        url: `clubhome/${Qdata.id}`,
        notiCategoryNum: 5
      })
        .then((res) => console.log(res))
        .catch((err) => alert(err.response.data.msg));
      await getInfo(Qdata.id, today.format('YYYY-MM'))
        .then((res) => setSchedule(res.data.result))
        .catch((err) => alert(err.reponse.data.msg));
    }
  };
  //ScheduleModify

  //DailyControl
  const getData = () => {
    getInfo(Qdata.id, today.format('YYYY-MM'))
      .then((res) => setSchedule(res.data.result))
      .catch((err) => alert(err.response.data.msg));
  };
  const onClickPencil = (schedule) => {
    setTitle(schedule.title);
    setPeriod([schedule.startDate, schedule.endDate]);
    setNo(schedule.no);
    setColor(schedule.colorCode);
    setPop('ScheduleModify');
  };
  const onDeleteSchedule = async (el) => {
    await deleteSchedule(Qdata.id, el)
      .then((res) => console.log(res))
      .catch((err) => alert(err.response.data.msg));
    await getData();
  };

  const importantModify = (schedule, e) => {
    importantSchedule(Qdata.id, schedule, { important: e }).then((res) =>
      getData()
    );
  };
  //DailyControl

  //DailyModal
  const addSet = () => {
    setStartDate(today.format('YYYY-MM-DD'));
    setEndDate(today.format('YYYY-MM-DD'));
    setColor('#FFFFFF');
  };
  const modifySet = () => {
    setStartDate(period[0]);
    setEndDate(period[1]);
    setNewTitle(title);
    setColorCode(color);
  };
  //일정 추가 버튼
  const onAddBtn = (e) => {
    e.stopPropagation();
    if (
      Date.parse(startDate) <= Date.parse(endDate) &&
      titleRef.current.value.length > 0
    ) {
      onClickAdd();
    } else if (Date.parse(startDate) > Date.parse(endDate)) {
      alert('날짜를 확인해주세요');
    } else if (titleRef.current.value.length <= 0) {
      alert('제목을 확인해주세요');
    }
  };
  //일정 추가 함수
  const onClickAdd = async () => {
    if (titleRef.current.value.length > 50)
      alert('제목은 50자 이하여야 합니다.');
    else {
      await addSchedule(Qdata.id, {
        colorCode: color,
        title: titleRef.current.value,
        startDate: startDate,
        endDate: endDate,
        url: `clubhome/${Qdata.id}`,
        notiCategoryNum: 4
      })
        .then((res) => console.log(res))
        .catch((err) => alert(err.response.data.msg));
      await getInfo(Qdata.id, today.format('YYYY-MM'))
        .then((res) => setSchedule(res.data.result))
        .catch((err) => alert(err.response.data.msg));
      setPop('Calendar');
    }
  };
  //DailyModal
  const Qdata = router.query;
  const colors = ['#F9AE7B', '#FEDD01', '#E3E931', '#B5EAFF', '#E9D9EF'];
  const todayData = useSelector((state) => state.calendar.info);
  const dispatch = useDispatch();

  const moveLogin = useCallback(() => router.push('/LoginPage'), [router]);
  const moveHome = useCallback(() => location.reload(), []);

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
    dispatch,
    todayData
  ]);

  const inDate = useCallback((startDate, selectedDate, endDate) => {
    return (
      Date.parse(startDate) <= Date.parse(selectedDate) &&
      Date.parse(selectedDate) <= Date.parse(endDate)
    );
  }, []);

  const checkFlag = useCallback(
    (days) => {
      if (moment().format('YYYYMMDD') === days.format('YYYYMMDD')) {
        return 'today';
      } else if (days.format('MM') !== today.format('MM')) {
        return 'other';
      }
      return 'month';
    },
    [today]
  );

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
          checkFlag={checkFlag}
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
          weekDays={weekDays}
        />
      </div>
      {(pop === 'DailyModal' || pop === 'ScheduleModify') && (
        <DailyModal
          colors={colors}
          setPop={setPop}
          today={today}
          pop={pop}
          startDate={startDate}
          endDate={endDate}
          setStartDate={setStartDate}
          setEndDate={setEndDate}
          color={color}
          setColor={setColor}
          onClickAdd={onClickAdd}
          onAddBtn={onAddBtn}
          titleRef={titleRef}
          addSet={addSet}
          modifySet={modifySet}
        />
      )}
      {pop === 'DailyControl' && (
        <DailyControl
          schedule={schedule}
          date={date}
          setPop={setPop}
          inDate={inDate}
          onClickPencil={onClickPencil}
          onDeleteSchedule={onDeleteSchedule}
          importantModify={importantModify}
        />
      )}
      {/* {pop === 'ScheduleModify' && (
        <ScheduleModify
          title={title}
          period={period}
          setPop={setPop}
          pop={pop}
          color={color}
          colors={colors}
          startDate={startDate}
          setStartDate={setStartDate}
          endDate={endDate}
          setEndDate={setEndDate}
          colorCode={colorCode}
          setColorCode={setColorCode}
          setNewTitle={setNewTitle}
          onClickModifyBtn={onClickModifyBtn}
        />
      )} */}
    </>
  );
};
export default React.memo(Calendar);
