import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";
import React from "react";
import { useState, useEffect, useRef } from "react";
import moment from "moment";
import DailyModal from "./DailyModal";
import Schedule from "./Schedule";
import DailyControl from "./DailyControl";
import ScheduleModify from "./ScheduleModify";
import axios from "axios";

const Calendar = () => {
  const [getMoment, setMoment] = useState(moment());
  const [date, setDate] = useState("");
  const [pop, setPop] = useState(0);
  const [schedule, setSchedule] = useState([]);
  const [no, setNo] = useState(0);
  const [period, setPeriod] = useState([]);
  const [title, setTitle] = useState("");
  const [color, setColor] = useState("");
  const [nowDay, setNowDay] = useState("");
  const nowDate = useRef();
  const today = getMoment;
  const firstWeek = today.clone().startOf("month").week();
  const lastWeek =
    today.clone().endOf("month").week() === 1
      ? 53
      : today.clone().endOf("month").week();

  const getInfo = () => {
    axios(
      `http://3.36.72.145:8080/api/club/schedule/1/${today.format("YYYY-MM")}`,
      {
        method: "GET",
        headers: {
          "Content-type": "application/json; charset=utf-8",
          "x-auth-token":
            "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
        },
      }
    ).then((res) => setSchedule(res.data.result));
    console.log(1);
  };

  let month = new Date();
  let nowMonth = `${month.getMonth() + 1}`;
  if (nowMonth.length === 1) nowMonth = "0" + nowMonth;
  useEffect(() => {
    if (today.format("MM") === nowMonth) setNowDay(nowDate.current.id);
    getInfo();
  }, [getMoment]);

  const calendarArr = () => {
    let result = [];
    let week = firstWeek;
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className={styles.num} key={week}>
          {Array(7)
            .fill(0)
            .map((data, index) => {
              let days = today
                .clone()
                .startOf("year")
                .week(week)
                .startOf("week")
                .add(index, "day");
              if (moment().format("YYYYMMDD") === days.format("YYYYMMDD")) {
                return (
                  <td
                    className={styles.dayblock}
                    key={index}
                    ref={nowDate}
                    id={days.format("YYYY-MM-DD")}
                  >
                    <span
                      onClick={() => {
                        setPop(2);
                        setDate(days.format("YYYY-MM-DD"));
                      }}
                      className={styles.today}
                    >
                      {days.format("D")}
                    </span>
                    {schedule.map((el, i) => {
                      return Date.parse(el.startDate) <=
                        Date.parse(days.format("YYYY-MM-DD")) &&
                        Date.parse(days.format("YYYY-MM-DD")) <=
                          Date.parse(el.endDate) ? (
                        <>
                          <br />
                          <span
                            style={{ color: `${el.colorCode}` }}
                            key={days.format("YYYY-MM-DD")}
                          >
                            {el.title}
                          </span>
                        </>
                      ) : null;
                    })}
                  </td>
                );
              } else if (days.format("MM") !== today.format("MM")) {
                return (
                  <td
                    key={index}
                    className={styles.dayblock}
                    id={days.format("YYYY-MM-DD")}
                  >
                    <span
                      onClick={() => {
                        setPop(2);
                        setDate(days.format("YYYY-MM-DD"));
                      }}
                      className={styles.otherday}
                    >
                      {days.format("D")}
                    </span>
                    {schedule.map((el, i) => {
                      return Date.parse(el.startDate) <=
                        Date.parse(days.format("YYYY-MM-DD")) &&
                        Date.parse(days.format("YYYY-MM-DD")) <=
                          Date.parse(el.endDate) ? (
                        <>
                          <br />
                          <span
                            style={{ color: `${el.colorCode}` }}
                            key={days.format("YYYY-MM-DD")}
                          >
                            {el.title}
                          </span>
                        </>
                      ) : null;
                    })}
                  </td>
                );
              } else {
                return (
                  <td
                    key={index}
                    className={styles.dayblock}
                    id={days.format("YYYY-MM-DD")}
                  >
                    <span
                      onClick={() => {
                        setPop(2);
                        setDate(days.format("YYYY-MM-DD"));
                      }}
                      className={styles.monthdays}
                    >
                      {days.format("D")}
                    </span>
                    {schedule.map((el, i) => {
                      return Date.parse(el.startDate) <=
                        Date.parse(days.format("YYYY-MM-DD")) &&
                        Date.parse(days.format("YYYY-MM-DD")) <=
                          Date.parse(el.endDate) ? (
                        <>
                          <br />
                          <span
                            style={{ color: `${el.colorCode}` }}
                            key={days.format("YYYY-MM-DD")}
                          >
                            {el.title}
                          </span>
                        </>
                      ) : null;
                    })}
                  </td>
                );
              }
            })}
        </tr>
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
        <div className={styles.control}>
          <span
            className={styles.lastmonth}
            onClick={() => {
              setMoment(getMoment.clone().subtract(1, "month"));
            }}
          >
            &lt;
          </span>
          <span className={styles.thisMonth}>
            {today.format("YYYY년 MM월")}
          </span>
          <span
            className={styles.nextmonth}
            onClick={() => {
              setMoment(getMoment.clone().add(1, "month"));
            }}
          >
            &gt;
          </span>
        </div>
        <div className={styles.add}>
          <span className={styles.addBtn} onClick={() => setPop(1)}>
            일정 추가하기
          </span>
        </div>
        <table className={styles.calendar}>
          <tbody>
            <tr className={styles.days}>
              <td className={styles.daysblock}>
                <span>일</span>
              </td>
              <td className={styles.daysblock}>
                <span>월</span>
              </td>
              <td className={styles.daysblock}>
                <span>화</span>
              </td>
              <td className={styles.daysblock}>
                <span>수</span>
              </td>
              <td className={styles.daysblock}>
                <span>목</span>
              </td>
              <td className={styles.daysblock}>
                <span>금</span>
              </td>
              <td className={styles.daysblock}>
                <span>토 </span>
              </td>
            </tr>
            {calendarArr()}
          </tbody>
        </table>
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
// export default getInfo;
