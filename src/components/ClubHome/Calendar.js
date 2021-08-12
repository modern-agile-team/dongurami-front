import styles from "./Calendar.module.sass";

const makeCalandar = (year, month) => {
  const calendarDays = [];
  let new_month = [];

  let firstDayOfMonth = new Date(year, month, 1).getDay();
  let endDateOfMonth = new Date(year, month + 1, 0).getDate();
  let cnt = 1;
  let days = [];

  for (let i = 0; i < 6; i++) {
    days = [];
    for (let j = 0; j < 7; j++) {
      if (cnt > endDateOfMonth) {
        days.push("");
      } else if (firstDayOfMonth > j && i === 0) {
        days.push("");
      } else {
        days.push(cnt);
        cnt++;
      }
    }
    calendarDays.push(days);
  }

  new_month = calendarDays.map((week) => {
    return (
      <div className={styles.row} key={week}>
        {week.map((day, idx) => {
          let dateKey =
            year +
            "-" +
            (month < 9 ? "0" + (month + 1) : month + 1) +
            "-" +
            (day < 10 ? "0" + day : day);

          return (
            <div key={dateKey}>
              <span>{day}</span>
            </div>
          );
        })}
      </div>
    );
  });
  return new_month;
};

const Calendar = () => {
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <button>◀</button>
        <span>Agust 2021</span>
        <button>▶</button>
      </div>
      <div className={styles.days}>
        <div className={styles.day}>
          <div>Sun</div>
          <div>Mon</div>
          <div>Tue</div>
          <div>Wed</div>
          <div>Thu</div>
          <div>Fri</div>
          <div>Sat</div>
        </div>
        {makeCalandar(2021, 8)}
      </div>
    </div>
  );
};

export default Calendar;
