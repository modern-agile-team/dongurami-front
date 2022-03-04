import { FaUserCircle, FaGraduationCap } from 'react-icons/fa';
import styles from 'styles/Profile/ModifyInfo.module.scss';

const ImmutableData = ({ userInfo, setGrade, grade, gradeArr }) => {
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
          <option style={{ color: 'gray' }}>{grade} 학년</option>
          {gradeArr.map((gradeEl, index) => {
            return (
              <option key={index} value={gradeEl}>
                {gradeEl === 4 ? '4 학년(졸업생)' : `${gradeEl} 학년`}
              </option>
            );
          })}
        </select>
      </div>
    </>
  );
};

export default ImmutableData;
