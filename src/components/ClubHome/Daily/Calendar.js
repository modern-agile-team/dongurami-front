import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";
import React from "react";
import { useState, useEffect, useRef } from "react";
import moment from "moment";
import DailyModal from "./DailyModal";
import Schedule from "./Schedule";
import DailyControl from "./DailyControl";
import ScheduleModify from "./ScheduleModify";
import axios from "axios";
import RightContainer from "./RightContainer";
import MakeTd from "./MakeTd";

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const [date, setDate] = useState("");
  const [pop, setPop] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [no, setNo] = useState(0);
  const [period, setPeriod] = useState([]);
  const [title, setTitle] = useState(null);
  const [color, setColor] = useState("");
  const [nowDay, setNowDay] = useState("");
  const nowDate = useRef();
  const moveHref = () => {
    document.location.href = "/ClubHome";
  };

  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  let token = "";

  const getInfo = () => {
    token = localStorage.getItem("jwt");
    axios(
      `http://3.36.72.145:8080/api/club/schedule/1/${today.format("YYYY-MM")}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          "x-auth-token": token,
        },
      }
    )
      .then((res) => setSchedule(res.data.result))
      .catch((err) => {
        console.log(err);
        alert(err.response.data.msg);
        moveHref();
      });
  };

  let month = new Date();
  let nowMonth = `${month.getMonth() + 1}`;
  if (nowMonth.length === 1) nowMonth = "0" + nowMonth;

  useEffect(() => {
    if (today.format("MM") === nowMonth) setNowDay(nowDate.current.id);
    getInfo();
  }, [getMoment]);

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
          setMoment={setMoment}
          getMoment={getMoment}
          today={today}
          setPop={setPop}
          calendarArr={calendarArr}
        />
      </div>
      <DailyModal
        setPop={setPop}
        today={today.format("YYYY-MM-DD")}
        pop={pop}
      />
      <DailyControl
        setNo={setNo}
        schedule={schedule}
        date={date}
        setPop={setPop}
        pop={pop}
        setPeriod={setPeriod}
        setTitle={setTitle}
        setColor={setColor}
        getInfo={getInfo}
      />
      <ScheduleModify
        token={token}
        title={title}
        period={period}
        no={no}
        setPop={setPop}
        pop={pop}
        color={color}
      />
    </>
  );
};
export default Calendar;
