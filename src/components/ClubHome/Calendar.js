import styles from "../../styles/Club/Home/Schedule/Calendar.module.scss";
import React from 'react';
import { useState, useEffect } from 'react';
// import moment from 'moment';



const Calendar =()=>{
  const [getMoment, setMoment]=useState(moment());    
  const [date, setDate] = useState("");
  const today = getMoment;  
  const firstWeek = today.clone().startOf('month').week();
  const lastWeek = today.clone().endOf('month').week() === 1 ? 53 : today.clone().endOf('month').week();

  const calendarArr=()=>{

    let result = [];
    let week = firstWeek;
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
                        <span className={styles.today} onClick={() => setDate(days.format('YYYYMMDD'))}>{days.format('D')}</span>
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
                        <a className={styles.monthdays} id={days.format('YYYYMMDD')} onClick={() => setDate(days.format('YYYYMMDD'))}>{days.format('D')}</a>
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
    <div className={styles.wrap}>
        <div className={styles.control}>
          <button className={styles.lastmonthBtn} onClick={()=>{ setMoment(getMoment.clone().subtract(1, 'month')) }} >이전달</button>
          <span onClick={() => setcomp(12)}>{today.format('YYYY 년 MM 월')}</span>
          <button className={styles.nextmonthBtn} onClick={()=>{ setMoment(getMoment.clone().add(1, 'month')) }} >다음달</button>
        </div>
        <div className={styles.days}>
          <h2>일</h2>
          <h2>월</h2>
          <h2>화</h2>
          <h2>수</h2>
          <h2>목</h2>
          <h2>금</h2>
          <h2>토</h2>
        </div>
        <table className={styles.calendar}>
          <tbody>
            {calendarArr()}
          </tbody>
        </table>
    </div>
    
  );
}
export default Calendar;

