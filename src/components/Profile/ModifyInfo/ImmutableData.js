import { FaUserCircle, FaGraduationCap } from "react-icons/fa";
import styles from "../../../styles/Profile/ModifyInfo.module.scss";

const ImmutableData = ({ data, setGrade, grade }) => {
  const gradeArr = [1, 2, 3, 4];
  return (
    <div className={styles.immutable}>
      <div className={styles.name}>
        <FaUserCircle />
        <span> {data.profile.name}</span>
      </div>
      <div>
        <FaGraduationCap />
        <span>{data.profile.major}</span>
        <select onChange={(e) => setGrade(e.target.value)} defaultValue={grade}>
          {gradeArr.map((el, i) => {
            return (
              <option key={i} value={el}>
                {el === 4 ? "4(졸업생)" : el}
              </option>
            );
          })}
        </select>
        <span>학년</span>
      </div>
      <p>소속 동아리</p>
      {data.profile.club.map((el, i) => {
        return <span key={i}>{el}</span>;
      })}
      <hr />
    </div>
  );
};

export default ImmutableData;
