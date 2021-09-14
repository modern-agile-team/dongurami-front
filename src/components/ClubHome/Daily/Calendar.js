import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";
import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import DailyModal from "./DailyModal";
import Schedule from "./Schedule";




const Calendar =()=> {
  const [getMoment, setMoment]=useState(moment());    
  const [date, setDate] = useState("");
  const [pop, setPop] = useState(0);
  
  const today = getMoment;  
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();
  const calendarArr=()=>{
    let result = [];
    let week = firstWeek;
    const weekDays = ["일", "월", "화", "수", "목", "금", "토"]
    for (week; week <= lastWeek; week++) {
      result = result.concat(
        <tr className={styles.num} key={week}>
            {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td className={styles.dayblock} key={index}>
                        <span className={styles.today} onClick={() => setDate(days.format('YYYYMMDD'))}>{days.format('D')}</span>
                        <span onClick={() => 
                        fetch('http://3.36.72.145:8080/api/club/schedule/1', {
                        method: 'GET',
                        headers : {
                          "Content-type": "application/json; charset=utf-8",
                          "x-auth-token":"eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk" 
                        }
                      })
                      .then((res) => res.json())
                      .then((res) => console.log(res))}>asdf</span>
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index} className={styles.dayblock}>
                        <span onClick={() => setDate(days.format('YYYYMMDD'))} className={styles.otherday}>{days.format('D')}</span>
                      </td>
                  );
                }else{
                  return(
                      <td key={index} className={styles.dayblock}>
                        <span className={styles.monthdays} id={days.format('YYYYMMDD')} onClick={() => setDate(days.format('YYYYMMDD'))}>{days.format('D')}</span>
                      </td>
                  );
                }
              })
            }
          </tr>);
    }
    return result;
  }
   return (
     <>
      <div className={styles.wrap}>
        <Schedule className={styles.scheduleComp}/>
          <div className={styles.control}>
            <span className={styles.lastmonth} onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >&lt;</span>
            <span className={styles.thisMonth}>{today.format('YYYY년 MM월')}</span>
            <span className={styles.nextmonth} onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >&gt;</span>
          </div>
          <div className={styles.add}>
            <span className={styles.addBtn} onClick={() => setPop(1)}>일정 추가하기</span>
          </div>
          <table className={styles.calendar}>
            <tbody>
              <tr className={styles.days}>
                  <td className={styles.daysblock}><span>일</span></td>
                  <td className={styles.daysblock}><span>월</span></td>
                  <td className={styles.daysblock}><span>화</span></td>
                  <td className={styles.daysblock}><span>수</span></td>
                  <td className={styles.daysblock}><span>목</span></td>
                  <td className={styles.daysblock}><span>금</span></td>
                  <td className={styles.daysblock}><span>토  </span></td>
              </tr>
              {calendarArr()}
            </tbody>
          </table>  
      </div>
      <DailyModal 
      setPop={setPop}
      today={today.format('YYYY-MM-DD')}
      pop={pop} />
    </>
  );
}
export default Calendar;

