import { HiPencil } from 'react-icons/hi';
import { FaTrashAlt } from 'react-icons/fa';
import styles from 'styles/Club/Home/Apply/Question/Question.module.scss';

const Question = ({
  question,
  index,
  isUpdate,
  updateQuestionInput,
  onUpdateInputChange,
  onAnswerInputChange,
  leader,
  userInfo,
  onUpdate,
  onRemove
}) => {
  return (
    <li id={index} className={styles.li}>
      <div className={styles.question}>
        {isUpdate[index] ? (
          <input
            ref={updateQuestionInput}
            type="text"
            defaultValue={question.description}
            onChange={onUpdateInputChange}
          />
        ) : (
          <span>{question.description}</span>
        )}
        {leader === userInfo.id && (
          <div className={styles.icons}>
            <HiPencil onClick={() => onUpdate(index, question.no)} />
            <FaTrashAlt
              id={styles.remove}
              onClick={() => onRemove(question.no)}
            />
          </div>
        )}
      </div>
      <textarea onChange={onAnswerInputChange} />
    </li>
  );
};

export default Question;
