import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Apply/Additional.module.scss";
import { HiPencil } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

const list = [
  {
    question: "지원 동기",
  },
  {
    question: "다룰 줄 아는 프로그래밍 언어는?",
  },
  {
    question: "하고 싶은 프로젝트",
  },
];

const Additional = () => {
  const a = new Array(list.length).fill(false);
  const [isUpdate, setIsUpdate] = useState(a);

  const onUpdate = (i) => {
    const b = isUpdate.map((el, index) => {
      return i === index ? !el : el;
    });
    setIsUpdate(b);
  };

  const onRemove = (i) => {
    const b = list.filter((el, index) => {
      return i !== index;
    });
    console.log(b);
  };

  return (
    <div className={styles.additional}>
      <ul>
        {list.map((el, i) => {
          return (
            <li key={i}>
              {isUpdate[i] ? (
                <input type="text" defaultValue={el.question} />
              ) : (
                <span>{el.question}</span>
              )}
              <HiPencil onClick={() => onUpdate(i)} />
              <FaTrashAlt id={styles.remove} onClick={() => onRemove(i)} />
              <textarea />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Additional;
