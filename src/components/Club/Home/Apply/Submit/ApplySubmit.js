import React from 'react';
import styles from 'styles/Club/Home/Apply/Submit/ApplySubmit.module.scss';
import { IoIosCheckmark } from 'react-icons/io';
import NewQuestion from './NewQuestion';

const ApplySubmit = ({
  newQuestionInput,
  handleChange,
  onQuestionAdd,
  iconSize,
  onResumeSubmit,
  leader
}) => {
  return (
    <>
      {leader ? (
        <NewQuestion
          newQuestionInput={newQuestionInput}
          handleChange={handleChange}
          onQuestionAdd={onQuestionAdd}
          iconSize={iconSize}
        />
      ) : (
        <div className={styles.submit}>
          <IoIosCheckmark size={iconSize} onClick={onResumeSubmit} />
        </div>
      )}
    </>
  );
};

export default ApplySubmit;
