import { FaUserCircle, FaGraduationCap } from 'react-icons/fa';
import styles from '../../../styles/Profile/ModifyInfo.module.scss';

const ImmutableData = ({ userInfo, setGrade, grade }) => {
  const gradeArr = [1, 2, 3, 4];
  return (
    <div className={styles.immutable}>
      <div className={styles.name}>
        <FaUserCircle />
        <span>{userInfo.name}</span>
      </div>
      <div>
        <FaGraduationCap />
        <span>{userInfo.major}</span>
        <select
          onChange={(e) => setGrade(e.target.value)}
          defaultValue={grade ?? '학년선택'}
        >
          {gradeArr.map((grade, index) => {
            return (
              <option key={index} value={grade}>
                {grade === 4 ? '4(졸업생)' : grade}
              </option>
            );
          })}
        </select>
        <span>학년</span>
      </div>
    </div>
  );
};

export default ImmutableData;
