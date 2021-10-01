import styles from "../../../styles/Club/Home/Intro/Desc.module.scss";
import { IoPencil } from "react-icons/io5";

export const studentId = "20170805";

const Desc = ({
  onDescChange,
  introDesc,
  onDescUpdate,
  descUpdate,
  onDescSubnmit,
  leader,
}) => {
  console.log(leader);
  return (
    <div className={styles.intro}>
      <span>동아리 소개</span>
      <div id={styles.desc}>
        {descUpdate ? (
          <textarea onChange={onDescChange} defaultValue={introDesc} />
        ) : (
          <p>{introDesc}</p>
        )}
      </div>
      {leader === studentId ? (
        <div>
          {descUpdate ? (
            <button onClick={onDescSubnmit}>Finish</button>
          ) : (
            <button onClick={onDescUpdate}>
              <IoPencil />
              Edit
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Desc;
