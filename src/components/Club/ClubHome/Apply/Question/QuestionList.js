import React from 'react';
import styles from 'styles/Club/Home/Apply/Question/QuestionList.module.scss';
import Question from './Question';

const QuestionList = ({
  questions,
  onRemove,
  onUpdate,
  isUpdate,
  onAnswerInputChange,
  updateQuestionInput,
  onUpdateInputChange,
  leader,
  userInfo
}) => {
  return (
    <div className={styles.additional}>
      <ul>
        {questions.map((question, index) => {
          return (
            <Question
              key={question.no}
              question={question}
              index={index}
              isUpdate={isUpdate}
              updateQuestionInput={updateQuestionInput}
              onUpdateInputChange={onUpdateInputChange}
              onAnswerInputChange={onAnswerInputChange}
              leader={leader}
              userInfo={userInfo}
              onRemove={onRemove}
              onUpdate={onUpdate}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default QuestionList;
