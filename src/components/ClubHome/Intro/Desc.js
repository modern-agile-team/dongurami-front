import styles from "../../../styles/Club/Home/Intro/Desc.module.scss";
import LogoUpdate from "./LogoUpdate";

const userId = "test1";

const Desc = ({
  onDescChange,
  introDesc,
  onDescUpdate,
  descUpdate,
  onDescSubnmit,
  onClubLogoChange,
  leader,
}) => {
  const setOnClick = descUpdate ? onDescSubnmit : onDescUpdate;

  return (
    <div className={styles.intro}>
      <div className={styles.introHeader}>
        <span>동아리 소개</span>
        {userId === leader ? (
          <LogoUpdate onClubLogoChange={onClubLogoChange} />
        ) : null}
      </div>
      <div id={styles.desc}>
        {descUpdate ? (
          <textarea onChange={onDescChange} defaultValue={introDesc} />
        ) : (
          <p>{introDesc}</p>
        )}
      </div>
      {userId === leader ? (
        <div>
          <button onClick={setOnClick}>수정</button>
        </div>
      ) : null}
    </div>
  );
};

export default Desc;
