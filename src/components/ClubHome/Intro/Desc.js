import { useEffect, useRef } from "react";
import styles from "../../../styles/Club/Home/Intro/Desc.module.scss";

const Desc = ({
  onDescChange,
  introDesc,
  onDescUpdate,
  descUpdate,
  onDescSubnmit,
}) => {
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
      <div>
        {descUpdate ? (
          <button onClick={onDescSubnmit}>완료</button>
        ) : (
          <button onClick={onDescUpdate}>수정</button>
        )}
      </div>
    </div>
  );
};

export default Desc;
