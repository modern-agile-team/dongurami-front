import ApplySubmit from './Submit/ApplySubmit';
import styles from 'styles/Club/Home/Apply/ApplyBody.module.scss';
import BasicInfo from './Question/BasicInfo';
import QuestionList from './Question/QuestionList';

const ApplyBody = ({
  onUserInfoChange,
  userInfo,
  onAnswerInputChange,
  isUpdate,
  onUpdateQuestionClick,
  onRemove,
  questions,
  onUpdateInputChange,
  leader,
  newQuestionInput,
  handleChange,
  onQuestionAdd,
  iconSize,
  onResumeSubmit
}) => {
  return (
    <div className={styles.container}>
      <BasicInfo onUserInfoChange={onUserInfoChange} userInfo={userInfo} />
      <QuestionList
        onAnswerInputChange={onAnswerInputChange}
        isUpdate={isUpdate}
        onUpdate={onUpdateQuestionClick}
        onRemove={onRemove}
        questions={questions}
        onUpdateInputChange={onUpdateInputChange}
        leader={leader}
        userInfo={userInfo}
      />
      <ApplySubmit
        newQuestionInput={newQuestionInput}
        handleChange={handleChange}
        onQuestionAdd={onQuestionAdd}
        iconSize={iconSize}
        onResumeSubmit={onResumeSubmit}
        leader={leader}
        userInfo={userInfo}
      />
    </div>
  );
};

export default ApplyBody;
