import styles from "../../../styles/Club/Home/Schedule/ScheduleModify.module.scss";
import { MdClose } from "react-icons/md";
import axios from "axios";
import Router from "next/router";
import { useEffect, useState } from "react";

const ScheduleModify = ({ color, title, period, no, setPop, pop }) => {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  let putTitle = title;
  let colorCode = "#44444";
  const moveCal = () => {
    Router.push("/ClubHome");
  };
  useEffect(() => {
    setStartDate(period[0]);
    setEndDate(period[1]);
  }, [pop]);

  if (pop === 3)
    return (
      <div>
        <div>
          <div>
            <h3>일정 수정하기</h3>
          </div>
          <MdClose className={styles.closeBtn} onClick={() => setPop(0)} />
          <div>
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
                putTitle = e.target.value;
              }}
            />
            <br />
            <p>일정 색상</p>
            <input
              type="color"
              onChange={(e) => {
                colorCode = e.target.value;
              }}
            />
          </div>
        </div>
        <button
          onClick={() => {
            moveCal();
            axios(`http://3.36.72.145:8080/api/club/schedule/1/${no}`, {
              method: "PUT",
              headers: {
                "Content-type": "application/json; charset=utf-8",
                "x-auth-token":
                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
              },
              data: {
                colorCode: colorCode,
                title: putTitle,
                startDate: startDate,
                endDate: endDate,
                period: 3,
              },
            })
              .then((res) => console.log(res))
              .catch((err) => console.log(err.response));
          }}
        >
          수정하기
        </button>
      </div>
    );
  else return null;
};

export default ScheduleModify;
