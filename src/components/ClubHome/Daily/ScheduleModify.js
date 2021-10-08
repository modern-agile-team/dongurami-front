import styles from '../../../styles/Club/Home/Schedule/ScheduleModify.module.scss';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getInfo, modifySchedule } from 'apis/calendar';

const ScheduleModify = ({
  today,
  setSchedule,
  color,
  title,
  period,
  no,
  setPop,
  pop
}) => {
  const [startDate, setStartDate] = useState();
  const [endDate, setEndDate] = useState();
  const [colorCode, setColorCode] = useState();
  const [newTitle, setNewTitle] = useState();

  useEffect(() => {
    setStartDate(period[0]);
    setEndDate(period[1]);
    setNewTitle(title);
    setColorCode(color);
  }, [pop]);

  const axiosPUT = () => {
    modifySchedule(no, {
      colorCode: colorCode,
      title: newTitle,
      startDate: startDate,
      endDate: endDate,
      clubName: '우아한 애자일',
      url: 'http://3.36.72.145:8080/api/club/schedule/1',
      notiCategoryNum: 5
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response));
    getInfo(today)
      .then((res) => setSchedule(res.data.result))
      .catch((err) => {
        alert(err);
      });
  };
  if (pop === 'ScheduleModify')
    return (
      <div className={styles.wrap}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3>일정 수정하기</h3>
          </div>
          <MdClose
            className={styles.closeBtn}
            onClick={() => setPop('Calendar')}
          />
          <div className={styles.body}>
            <p>시작하는 날짜</p>
            <input
              type="date"
              id="startDate"
              onChange={(e) => {
                setStartDate(e.target.value);
              }}
            />
            <p>끝나는 날짜</p>
            <input
              type="date"
              id="endDate"
              onChange={(e) => {
                setEndDate(e.target.value);
              }}
            />
            <br />
            <br />
            {startDate} ~ {endDate}
            <p>일정 제목</p>
            <input
              type="text"
              placeholder={title}
              onChange={(e) => {
                setNewTitle(e.target.value);
              }}
            />
            <br />
            <p>일정 색상</p>
            <input
              type="color"
              value={colorCode}
              onChange={(e) => {
                setColorCode(e.target.value);
              }}
            />
          </div>
        </div>
        <button
          className={styles.modifyBtn}
          onClick={() => {
            if (Date.parse(startDate) <= Date.parse(endDate)) {
              axiosPUT();
              setPop('Calendar');
            } else alert('날짜가 이상함');
          }}
        >
          수정하기
        </button>
      </div>
    );
  else return null;
};

export default ScheduleModify;
