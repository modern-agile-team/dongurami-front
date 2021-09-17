import styles from "../../../styles/Club/Home/Schedule/DailyModal.module.scss";
import { useState, useRef, useEffect } from "react";
import { MdClose } from "react-icons/md";
import axios from "axios";
import Router from "next/router";

const DailyModal = ({ setPop, pop, today }) => {
  const [startDate, setStartDate] = useState(today);
  const [endDate, setEndDate] = useState(today);
  const [color, setColor] = useState("#000000");
  const startInput = useRef();
  const endInput = useRef();
  const colorCode = useRef();
  const title = useRef();
  useEffect(() => {
    setStartDate(today);
    setEndDate(today);
    setColor("#000000");
  }, [pop]);
  const moveCal = () => {
    Router.push("/ClubHome");
  };
  const axiosPOST = async () => {
    await axios(`http://3.36.72.145:8080/api/club/schedule/1`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
      },
      data: {
        colorCode: color,
        title: title.current.value,
        startDate: startDate,
        endDate: endDate,
        period: 3,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
  };
  if (pop === 1) {
    return (
      <div className={styles.wrap}>
        <div className={styles.modal}>
          <div className={styles.header}>
            <h3>일정 작성</h3>
          </div>
          <MdClose className={styles.closeBtn} onClick={() => setPop(0)} />
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
            />{" "}
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
            <p>일정 색상</p>
            <input
              type="color"
              ref={colorCode}
              className={styles.choiceColor}
              onChange={() => setColor(`${colorCode.current.value}`)}
            />
          </div>
        </div>
        <button
          className={styles.addBtn}
          onClick={() => {
            if (
              Date.parse(startDate) <= Date.parse(endDate) &&
              title.current.value.length > 0
            ) {
              axiosPOST();
              moveCal();
            } else if (Date.parse(startDate) > Date.parse(endDate))
              alert("날짜가 이상함");
            else if (title.current.value.length <= 0) {
              alert("제목이 이상함");
              console.log(123013202418);
            }
          }}
        >
          추가하기
        </button>
      </div>
    );
  } else return null;
};

export default DailyModal;
