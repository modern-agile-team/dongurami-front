import styles from 'styles/Club/Home/Schedule/ScheduleModify.module.scss';
import { MdClose } from 'react-icons/md';
import { useEffect, useState } from 'react';
import { getInfo, modifySchedule } from 'apis/calendar';

const ScheduleModify = ({
  Qdata,
  today,
  setSchedule,
  color,
  colors,
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
  }, [pop, color, period, title]);

  const axiosPUT = async () => {
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
  if (pop !== 'ScheduleModify') return null;

  return (
    <div className={styles.wrap} onClick={() => setPop('Calendar')}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
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
            onChange={(e) => setStartDate(e.target.value)}
          />
          <p>끝나는 날짜</p>
          <input
            type="date"
            id="endDate"
            onChange={(e) => setEndDate(e.target.value)}
          />
          <br />
          <br />
          {startDate} ~ {endDate}
          <p>일정 제목</p>
          <input
            className={styles.titleInput}
            type="text"
            placeholder={title}
            onChange={(e) => setNewTitle(e.target.value)}
          />
          <br />
          <p>일정 색상</p>
          {colors.map((color, index) => {
            return (
              <button
                className={styles.colorBtn}
                key={index}
                style={{ background: color }}
                onClick={() => setColorCode(`${color}`)}
              ></button>
            );
          })}
          <span
            className={styles.modifyBtn}
            onClick={() => {
              if (Date.parse(startDate) <= Date.parse(endDate)) {
                axiosPUT();
                setPop('Calendar');
              } else alert('날짜를 확인해주세요');
            }}
          >
            ✏️ 수정
          </span>
          <br />
          <span className={styles.sample} style={{ background: colorCode }}>
            색상 미리보기
          </span>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModify;
