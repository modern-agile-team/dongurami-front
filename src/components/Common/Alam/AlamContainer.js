import styles from "../../../styles/Common/Alam/AlamContainer.module.scss";
import { FaTrashAlt } from "react-icons/fa";
import { useEffect, useState } from "react";
import axios from "axios";

const alams = [
  {
    big: "댓글이 달렸습니다.",
    small: "ㄹㅇㅋㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "케켘ㅋㅋㅋㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "그래서 여기 뭐하는 동아린가요?",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "허허",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "ㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "ㅋㅋㅋㅋㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "우아한 애자일 최고",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "ㄹㅇㅋㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "케켘ㅋㅋㅋㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "그래서 여기 뭐하는 동아린가요?",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "허허",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "ㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "ㅋㅋㅋㅋㅋ",
    date: "2021-09-03",
  },
  {
    big: "댓글이 달렸습니다.",
    small: "우아한 애자일 최고",
    date: "2021-09-03",
  },
];

const AlamContainer = () => {
  const [alamList, setAlamList] = useState(alams);
  let jwtToken = "";
  if (typeof window !== "undefined") {
    jwtToken = localStorage.getItem("jwt");
  }
  // const getAlamData = async () => {
  //   const options = {
  //     headers: {
  //       "Content-type": "application/json; charset=utf-8",
  //       "x-auth-token": jwtToken,
  //     },
  //   };
  //   await axios
  //     .get("http://3.36.72.145:8080/api/notification/entire", options)
  //     .then((res) => console.log(res.data));
  // };

  const onAlamDeleteAll = () => {
    const deleteAlams = alamList.slice(3);
    setAlamList(deleteAlams);
  };

  // useEffect(() => {
  //   getAlamData();
  // });
  return (
    <div className={styles.container}>
      <div className={styles.icons}></div>
      <div className={styles.alams}>
        {alamList.slice(0, 3).map((el, i) => {
          return (
            <div key={i}>
              <p id={styles.big}>{el.big}</p>
              <p className={styles.des}>{el.small}</p>
              <p id={styles.date}>{el.date}</p>
            </div>
          );
        })}
      </div>
      <hr />
      <FaTrashAlt onClick={onAlamDeleteAll} />
    </div>
  );
};

export default AlamContainer;
