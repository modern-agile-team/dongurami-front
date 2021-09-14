import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Apply/Additional.module.scss";
import { HiPencil } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

const Additional = ({ list, onRemove, onUpdate, isUpdate }) => {
  const [a, setA] = useState("");

  const onChange = (e) => {
    console.log(e.target.value);
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
              <textarea onChange={onChange} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Additional;
