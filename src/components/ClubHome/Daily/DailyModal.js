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

  //추가하는 함수
  const axiosPOST = async () => {
    let token = localStorage.getItem("jwt");
    await axios(`http://3.36.72.145:8080/api/club/schedule/1`, {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": token,
      },
      data: {
        colorCode: color,
        title: title.current.value,
        startDate: startDate,
        endDate: endDate,
      },
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err.response.data.msg));
  };
  const onAddBtn = (e) => {
    e.stopPropagation();
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
    }
  };
  if (pop === "DailyModal") {
    return (
      <div className={styles.wrap} onClick={() => setPop("Calendar")}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>일정 작성</h3>
          </div>
          <MdClose
            className={styles.closeBtn}
            onClick={() => setPop("Calendar")}
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
        <button className={styles.addBtn} onClick={(e) => onAddBtn(e)}>
          추가하기
        </button>
      </div>
    );
  } else return null;
};

export default DailyModal;
