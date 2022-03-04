import React from 'react';
import styles from 'styles/Club/Home/Apply/Submit/NewQuestion.module.scss';
import { IoIosAddCircleOutline } from 'react-icons/io';

const NewQuestion = ({
  newQuestionInput,
  handleChange,
  onQuestionAdd,
  iconSize
}) => {
  return (
    <div className={styles.leader}>
      <span>새로운 질문</span>
      <input ref={newQuestionInput} type="text" onChange={handleChange} />
      <IoIosAddCircleOutline onClick={onQuestionAdd} size={iconSize} />
    </div>
  );
};

export default NewQuestion;
