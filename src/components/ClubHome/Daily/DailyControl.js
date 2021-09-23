import styles from "../../../styles/Club/Home/Schedule/DailyControl.module.scss";
import { HiPencil } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";
import axios from "axios";
import { AiFillStar, AiOutlineStar } from "react-icons/ai";
import { MdClose } from "react-icons/md";

const DailyControl = ({
  setTitle,
  setPeriod,
  setNo,
  schedule,
  date,
  setPop,
  pop,
  setColor,
  getInfo,
}) => {
  let token = "";

  const onClickModify = (el) => {
    setTitle(el.title);
    setPeriod([el.startDate, el.endDate]);
    setNo(el.no);
    setColor(el.colorCode);
    setPop("ScheduleModify");
  };

  const onDeleteSchedule = (el) => {
    token = localStorage.getItem("jwt");
    axios(`http://3.36.72.145:8080/api/club/schedule/1/${el.no}`, {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": token,
      },
    })
      .then((res) => getInfo())
      .catch((err) => console.log(err.response.data.msg));
  };

  const axiosPATCH = (el, e) => {
    token = localStorage.getItem("jwt");
    axios(`http://3.36.72.145:8080/api/club/schedule/1/${el.no}`, {
      method: "PATCH",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token": token,
      },
      data: { important: e },
    }).then((res) => getInfo());
  };

  if (pop === "DailyControl")
    return (
      <div className={styles.wrap} onClick={() => setPop("Calendar")}>
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>{date} 일정</h3>
          </div>
          <MdClose
            className={styles.closeBtn}
            onClick={() => setPop("Calendar")}
          />
          <div className={styles.body}>
            <div className={styles.schedule}>
              {schedule.map((el, i) => {
                return Date.parse(el.startDate) <= Date.parse(date) &&
                  Date.parse(date) <= Date.parse(el.endDate) ? (
                  <>
                    <br />
                    <span style={{ color: `${el.colorCode}` }} key={el.no}>
                      {el.title}
                    </span>
                    <HiPencil
                      onClick={() => onClickModify(el)}
                      className={styles.pencil}
                    />
                    <FaTrashAlt
                      onClick={() => onDeleteSchedule(el)}
                      className={styles.delete}
                    />
                    {el.important ? (
                      <AiFillStar
                        className={styles.fillStar}
                        onClick={() => axiosPATCH(el, 0)}
                      />
                    ) : (
                      <AiOutlineStar
                        className={styles.outLineStar}
                        onClick={() => axiosPATCH(el, 1)}
                      />
                    )}
                  </>
                ) : null;
              })}
            </div>
          </div>
        </div>
      </div>
    );
  else return null;
};

export default DailyControl;
