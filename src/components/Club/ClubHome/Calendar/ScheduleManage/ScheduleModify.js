import styles from 'styles/Club/Home/Schedule/ScheduleModify.module.scss';
import { MdClose } from 'react-icons/md';
import { useEffect } from 'react';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

const ScheduleModify = ({
  color,
  colors,
  title,
  period,
  setPop,
  pop,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  colorCode,
  setColorCode,
  setNewTitle,
  onClickModifyBtn
}) => {
  useEffect(() => {
    setStartDate(period[0]);
    setEndDate(period[1]);
    setNewTitle(title);
    setColorCode(color);
  }, [color, period, title]);

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
          <br />
          <div className={styles.btnContainer}>
            <span className={styles.sample} style={{ background: colorCode }}>
              색상 미리보기
            </span>
            <DonguramiOutlineButton
              className={styles.modifyBtn}
              onClick={() => {
                if (Date.parse(startDate) <= Date.parse(endDate)) {
                  onClickModifyBtn();
                  setPop('Calendar');
                } else alert('날짜를 확인해주세요');
              }}
            >
              ✏️ 수정
            </DonguramiOutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ScheduleModify;
