import { FaUserCircle, FaGraduationCap } from 'react-icons/fa';
import styles from '../../../styles/Profile/ModifyInfo.module.scss';

const ImmutableData = ({ userInfo, setGrade, grade }) => {
  const gradeArr = [1, 2, 3, 4];
  return (
    <>
      <div className={styles.name}>
        <FaUserCircle />
        <span>{userInfo.name}</span>
      </div>
      <div>
        <FaGraduationCap />
        <span>{userInfo.major}</span>
      </div>
      <div>
        <FaGraduationCap />
        <select
          onChange={(e) => setGrade(e.target.value)}
          defaultValue={grade ?? '학년선택'}
        >
          {gradeArr.map((grade, index) => {
            return (
              <option key={index} value={grade}>
                {grade === 4 ? '4 학년(졸업생)' : `${grade} 학년`}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default ImmutableData;
