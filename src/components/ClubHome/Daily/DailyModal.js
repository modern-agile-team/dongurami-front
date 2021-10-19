import styles from '../../../styles/Club/Home/Schedule/DailyModal.module.scss';
import { useState, useRef, useEffect } from 'react';
import { MdClose } from 'react-icons/md';
import axios from 'axios';
import Router from 'next/router';
import { getInfo, addSchedule } from 'apis/calendar';

const DailyModal = ({ colors, setPop, pop, today, setSchedule }) => {
  const [startDate, setStartDate] = useState(today.format('YYYY-MM-DD'));
  const [endDate, setEndDate] = useState(today.format('YYYY-MM-DD'));
  const [color, setColor] = useState('#FFFFFF');
  const startInput = useRef();
  const endInput = useRef();
  const colorCode = useRef();
  const title = useRef();

  useEffect(() => {
    setStartDate(today.format('YYYY-MM-DD'));
    setEndDate(today.format('YYYY-MM-DD'));
    setColor('#FFFFFF');
  }, [pop]);

  const moveCal = () => {
    setPop('Calendar');
  };

  //추가하는 함수
  const onClickAdd = () => {
    addSchedule({
      colorCode: color,
      title: title.current.value,
      startDate: startDate,
      endDate: endDate,
      clubName: '우아한 애자일',
      url: 'http://3.36.72.145:8080/api/club/schedule/1',
      notiCategoryNum: 4
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.msg));
    getInfo(today)
      .then((res) => setSchedule(res.data.result))
      .catch((err) => {
        alert(err);
      });
  };

  const onAddBtn = (e) => {
    e.stopPropagation();
    if (
      Date.parse(startDate) <= Date.parse(endDate) &&
      title.current.value.length > 0
    ) {
      onClickAdd();
      moveCal();
    } else if (Date.parse(startDate) > Date.parse(endDate))
      alert('날짜가 이상함');
    else if (title.current.value.length <= 0) {
      alert('제목이 이상함');
    }
  };
  if (pop === 'DailyModal') {
    return (
      <div className={styles.wrap} onClick={() => setPop('Calendar')}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>일정 작성</h3>
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
              ref={startInput}
              onChange={() => setStartDate(startInput.current.value)}
            />
            <p>끝나는 날짜</p>
            <input
              id="endDate"
              type="date"
              ref={endInput}
              onChange={() => setEndDate(endInput.current.value)}
            />{' '}
            <br /> <br />
            {startDate} ~ {endDate} <br />
            <p>일정 제목</p>
            <input
              type="text"
              placeholder="일정 제목을 입력하세요"
              className={styles.titleInput}
              ref={title}
            />
            <br />
            <div>
            <p>일정 색상</p>
              {colors.map((color, index) => {
                return <button className={styles.colorBtn} key={index} style={{ background : color }} onClick={() => setColor(`${color}`)}></button>
              })}
              <span className={styles.addBtn} onClick={(e) => onAddBtn(e)}>추가</span>
            </div>
            <br />
            <span className={styles.sample} style={{ background: color }}>미리보기</span>
          </div>
        </div>
      </div>
    );
  } else return null;
};

export default DailyModal;
