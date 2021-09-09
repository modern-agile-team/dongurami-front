import styles from "../../../styles/Club/Home/Schedule/Calendar.module.scss";
import React from 'react';
import { useState, useEffect } from 'react';
import moment from 'moment';
import DailyModal from "./DailyModal";
import Schedule from "./Schedule";




const Calendar =()=>{
  const info = {
    startDate: "2021-09-07",
    endDate: "2021-09-09",
    term: 3,
    title: '살려주세요',
    color: '#44444'
  }
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
        <tr key={week}>
            {
              Array(7).fill(0).map((data, index) => {
                let days = today.clone().startOf('year').week(week).startOf('week').add(index, 'day');
                console.log(days)
                if(moment().format('YYYYMMDD') === days.format('YYYYMMDD')){
                  return(
                      <td className={styles.dayblock} key={index}>
                        <span className={styles.today} onClick={() => setDate(days.format('YYYYMMDD'))}>{days.format('D')}{weekDays[days.day()]}</span>
                        {/* <span>{weekDays[days.day()]}</span> */}
                      </td>
                  );
                }else if(days.format('MM') !== today.format('MM')){
                  return(
                      <td key={index} className={styles.dayblock}>
                        <span onClick={() => setDate(days.format('YYYYMMDD'))} className={styles.otherday}>{days.format('D')}{weekDays[days.day()]}</span>
                      </td>
                  );
                }else{
                  return(
                      <td key={index} className={styles.dayblock}>
                        <span className={styles.monthdays} id={days.format('YYYYMMDD')} onClick={() => setDate(days.format('YYYYMMDD'))}>{days.format('D')}{weekDays[days.day()]}</span>
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

