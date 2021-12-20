import styles from 'styles/Club/Home/Schedule/DailyModal.module.scss';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

const DailyModal = ({
  color,
  colors,
  title,
  period,
  colorCode,
  setColorCode,
  setNewTitle,
  onClickModifyBtn,
  setPop,
  today,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  setColor,
  titleRef,
  onAddBtn,
  pop,
  addSet,
  modifySet
}) => {
  useEffect(() => {
    pop === 'DailyModal' ? addSet() : modifySet();
  }, [today]);

  return (
    <div className={styles.wrap} onClick={() => setPop('Calendar')}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <div className={styles.header}>
          <h3>{pop === 'DailyModal' ? '일정 추가' : '일정 수정'}</h3>
        </div>
        <MdClose
          className={styles.closeBtn}
          onClick={() => setPop('Calendar')}
        />
        <div className={styles.body}>
          <p>시작하는 날짜</p>
          <input
            id="startDate"
            type="date"
            onChange={(e) => setStartDate(e.target.value)}
          />
          <p>끝나는 날짜</p>
          <input
            id="endDate"
            type="date"
            onChange={(e) => setEndDate(e.target.value)}
          />{' '}
          <br /> <br />
          {startDate} ~ {endDate} <br />
          <p>일정 제목</p>
          <input
            type="text"
            placeholder="일정 제목을 입력하세요"
            className={styles.titleInput}
            ref={titleRef}
          />
          <br />
          <div>
            <p>일정 색상</p>
            {colors.map((color, index) => {
              return (
                <button
                  className={styles.colorBtn}
                  key={index}
                  style={{ background: color }}
                  onClick={() => setColor(`${color}`)}
                ></button>
              );
            })}
          </div>
          <br />
          <div className={styles.btnContainer}>
            <span className={styles.sample} style={{ background: color }}>
              색상 미리보기
            </span>
            <DonguramiOutlineButton
              className={styles.addBtn}
              onClick={(e) => onAddBtn(e)}
            >
              ✏️ 추가
            </DonguramiOutlineButton>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DailyModal;
