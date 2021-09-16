import React from "react";
import styles from "../../../styles/Club/Home/Apply/Additional.module.scss";
import { HiPencil } from "react-icons/hi";
import { FaTrashAlt } from "react-icons/fa";

const Additional = ({
  list,
  onRemove,
  onUpdate,
  isUpdate,
  onQuestionInputChange,
}) => {
  return (
    <div className={styles.additional}>
      <ul>
        {list.map((el, i) => {
          return (
            <li id={i} key={i}>
              {isUpdate[i] ? (
                <input type="text" defaultValue={el.question} />
              ) : (
                <span>{el.description}</span>
              )}
              <HiPencil onClick={(e) => onUpdate(i, e)} />
              <FaTrashAlt id={styles.remove} onClick={() => onRemove(i)} />
              <textarea onChange={onQuestionInputChange} />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Additional;
