import styles from '../../../styles/Club/Home/Schedule/DailyModal.module.scss';
import { useState, useRef } from 'react';

const DailyModal = ({ setPop, pop, today }) => {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState('끝나는 날짜');
  const startInput = useRef();
  const endInput = useRef();

  if (pop === 0) return null;
  return (
    <>
      <div className={styles.wrap}> 
        <div className={styles.header}>
          <h3>일정 작성</h3> 
          <button onClick={() => setPop(0)}>X</button>
        </div>

        <div className={styles.body}>
          <p>시작하는 날짜</p>
          <input id='startDate' type='date' ref={startInput} onChange={() => setStartDate(startInput.current.value)}/>
          <p>끝나는 날짜</p>
          <input id='endDate' type='date' ref={endInput} onChange={() => setEndDate(endInput.current.value)}/> <br /> <br />
          {startDate} ~ {endDate} <br />
          <p>일정 제목</p>
          <input type='text' placeholder='일정 제목을 입력하세요' /><br />
          <p>일정 색상</p>
          <input type='color' />
        </div>
      </div>
      <button>추가하기</button>
      {/* onClick = {}fetch로 기간 제목 색상 보내서 저장하기 */}
    </>
  )
}

export default DailyModal;