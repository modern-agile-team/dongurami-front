import styles from 'styles/Club/Home/Schedule/DailyModal.module.scss';
import { useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import Confirm from './Confirm';
import SelectColors from './SelectColor';
import Period from './Period';
import Title from './Title';

const DailyModal = ({
  color,
  colors,
  title,
  setNewTitle,
  setPop,
  today,
  startDate,
  setStartDate,
  endDate,
  setEndDate,
  titleRef,
  onAddBtn,
  pop,
  addSet,
  modifySet,
  onModifyBtn,
  onClickColorBtn
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
          <Period
            setStartDate={setStartDate}
            setEndDate={setEndDate}
            startDate={startDate}
            endDate={endDate}
          />
          <Title
            pop={pop}
            title={title}
            setNewTitle={setNewTitle}
            titleRef={titleRef}
          />
          <br />
          <SelectColors colors={colors} onClickColorBtn={onClickColorBtn} />
          <br />
          <Confirm
            pop={pop}
            onAddBtn={onAddBtn}
            onModifyBtn={onModifyBtn}
            color={color}
          />
        </div>
      </div>
    </div>
  );
};

export default DailyModal;
