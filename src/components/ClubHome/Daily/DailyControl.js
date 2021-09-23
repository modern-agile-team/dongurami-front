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
  let token;

  const onClickModify = (el) => {
    setTitle(el.title);
    setPeriod([el.startDate, el.endDate]);
    setNo(el.no);
    setColor(el.colorCode);
    setPop(3);
  };

  const onDelete = (el) => {
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
  if (pop === 2)
    return (
      <div
        className={styles.wrap}
        onClick={() => setPop(0)}
        //회색 클릭시 꺼지는 기능 구현해야댐
      >
        <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
          <div className={styles.header}>
            <h3>{date} 일정</h3>
          </div>
          <MdClose className={styles.closeBtn} onClick={() => setPop(0)} />
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
                      onClick={() => onDelete(el)}
                      className={styles.delete}
                    />
                    {el.important ? (
                      <AiFillStar
                        className={styles.fillStar}
                        onClick={() => {
                          axios(
                            `http://3.36.72.145:8080/api/club/schedule/1/${el.no}`,
                            {
                              method: "PATCH",
                              headers: {
                                "Content-type":
                                  "application/json; charset=utf-8",
                                "x-auth-token":
                                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
                              },
                              data: { important: 0 },
                            }
                          ).then((res) => getInfo());
                        }}
                      />
                    ) : (
                      <AiOutlineStar
                        className={styles.outLineStar}
                        onClick={() => {
                          axios(
                            `http://3.36.72.145:8080/api/club/schedule/1/${el.no}`,
                            {
                              method: "PATCH",
                              headers: {
                                "Content-type":
                                  "application/json; charset=utf-8",
                                "x-auth-token":
                                  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6InRlc3QxIiwibmFtZSI6InRlc3QxIiwiY2x1Yk51bSI6IlsxXSJ9.1u6k5cJuaUlZj14CJJZiI8guHnlZXf1uuU6vZjl9jNk",
                              },
                              data: { important: 1 },
                            }
                          ).then((res) => getInfo());
                        }}
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
