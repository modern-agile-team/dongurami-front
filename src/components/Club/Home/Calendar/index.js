import styles from 'styles/Club/Home/Schedule/Calendar.module.scss';
import React, { useCallback, useState, useEffect, useRef } from 'react';
import moment from 'moment';
import DailyModal from './ScheduleManage/DailyModal/DailyModal';
import Schedule from './Schedule/Schedule';
import DailyControl from './ScheduleManage/DailyControl/DailyControl';
import RightContainer from './RightComponents/RightContainer';
import MakeTd from './RightComponents/MakeTd';
import { useRouter } from 'next/router';
import {
  getInfo,
  modifySchedule,
  deleteSchedule,
  importantSchedule,
  addSchedule,
  postAlarm
} from 'apis/calendar';
import { getSchedule } from 'redux/slices/calendar';
import { useDispatch, useSelector } from 'react-redux';

const Calendar = () => {
  const weekDays = ['일', '월', '화', '수', '목', '금', '토'];
  const colors = ['#F9AE7B', '#FEDD01', '#E3E931', '#B5EAFF', '#E9D9EF'];
  const [momentTime, setMoment] = useState(moment());
  const [date, setDate] = useState('');
  const [pop, setPop] = useState('Calendar');
  const [schedule, setSchedule] = useState([]);
  const [no, setNo] = useState(0);
  const [period, setPeriod] = useState([]);
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState('#FFFFFF');
  const [nowDay, setNowDay] = useState('');
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [colorCode, setColorCode] = useState();
  const [newTitle, setNewTitle] = useState();

  const titleRef = useRef();
  const router = useRouter();
  const Qdata = router.query;

  const todayData = useSelector((state) => state.calendar.info);
  const dispatch = useDispatch();

  const today = momentTime;
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek =
    today.clone().endOf('month').week() === 1
      ? 53
      : today.clone().endOf('month').week();
  const nowMonth = moment().format('YYYY-MM');

  //달 기준 일정 정보 불러오기
  const getData = () => {
    getInfo(Qdata.id, today.format('YYYY-MM'))
      .then((res) => setSchedule(res.data.schedule))
      .catch((err) => {
        alert(err.response.data.msg);
        if (err.response.status === 401) moveLogin();
        else if (err.response.status === 403) moveHome();
      });
  };
  //
  //일정 추가시 초기 설정
  const setDefaultAdd = () => {
    setStartDate(today.format('YYYY-MM-DD'));
    setEndDate(today.format('YYYY-MM-DD'));
    setColor('#FFFFFF');
  };
  //
  //일정 수정시 초기 설정
  const setDefaultModify = () => {
    setStartDate(period[0]);
    setEndDate(period[1]);
    setNewTitle(title);
    setColorCode(color);
  };
  //
  //수정 버튼
  const onModifyBtn = () => {
    if (Date.parse(startDate) <= Date.parse(endDate)) onClickModifyBtn();
    else alert('날짜를 확인해주세요');
  };
  //

  //일정 추가, 수정에서 색깔 버튼
  const onClickColorBtn = (color) => {
    setColor(`${color}`);
    setColorCode(`${color}`);
  };
  //

  //추가 버튼
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
  //
  //일정 추가 함수
  const onClickAdd = useCallback(async () => {
    let title = titleRef.current.value;
    if (title.length > 50) alert('제목은 50자 이하여야 합니다.');
    else {
      await addSchedule(Qdata.id, {
        colorCode: color,
        title: title,
        startDate,
        endDate
      })
        .then(() => setPop('Calendar'))
        .catch((err) => alert(err.response.data.msg));
      await postAlarm(Qdata.id, title, true);
      await getData();
    }
  }, [titleRef, Qdata, color, startDate, endDate]);
  //
  //일정 수정 함수
  const onClickModifyBtn = useCallback(async () => {
    if (newTitle.replace(/ /g, '').length === 0) setNewTitle(title);
    if (newTitle.length > 50) alert('제목은 50자 이하여야 합니다.');
    else {
      await modifySchedule(Qdata.id, no, {
        colorCode: colorCode,
        title: newTitle,
        startDate: startDate,
        endDate: endDate
      })
        .then(() => setPop('Calendar'))
        .catch((err) => alert(err.response.data.msg));
      await postAlarm(Qdata.id, newTitle, false);
      await getData();
    }
  }, [newTitle, title, Qdata, no, colorCode, startDate, endDate]);
  //

  //수정 모달 띄우기 전 초기값 설정(빈값 들어왔을 때)
  const onClickPencil = useCallback((schedule) => {
    setTitle(schedule.title);
    setPeriod([schedule.startDate, schedule.endDate]);
    setNo(schedule.no);
    setColor(schedule.colorCode);
    setPop('ScheduleModify');
  }, []);
  //

  //삭제 버튼 함수
  const onDeleteSchedule = useCallback(
    async (el) => {
      await deleteSchedule(Qdata.id, el)
        .then(() => getData())
        .catch((err) => alert(err.response.data.msg));
    },
    [Qdata]
  );
  //

  //별 버튼 함수
  const importantModify = useCallback(
    (schedule, important) => {
      importantSchedule(Qdata.id, schedule, { important }).then(() =>
        getData()
      );
    },
    [Qdata]
  );
  //

  const moveLogin = useCallback(() => router.push('/LoginPage'), [router]);
  const moveHome = useCallback(() => location.reload(), []);

  //기간 안에 날짜가 있는지 확인 (return bool)
  const inDate = useCallback((startDate, selectedDate, endDate) => {
    return (
      Date.parse(startDate) <= Date.parse(selectedDate) &&
      Date.parse(selectedDate) <= Date.parse(endDate)
    );
  }, []);
  //

  //td 만들때 오늘인지 이번달인지 다른달인지 확인하는 flag 생성 함수
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
  //

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
  //

  useEffect(() => {
    if (today.format('YYYY-MM') === nowMonth)
      setNowDay(moment().format('YYYY-MM-DD'));
    if (!router.isReady) return;
    dispatch(getSchedule({ clubId: Qdata.id, today: nowMonth }));
    getData();
  }, [today, nowMonth, router, Qdata.id, moveLogin, moveHome, dispatch]);

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
          onAddBtn={onAddBtn}
          titleRef={titleRef}
          setDefaultAdd={setDefaultAdd}
          setDefaultModify={setDefaultModify}
          onModifyBtn={onModifyBtn}
          onClickColorBtn={onClickColorBtn}
          setNewTitle={setNewTitle}
          title={title}
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
      )}{' '}
    </>
  );
};
export default React.memo(Calendar);
