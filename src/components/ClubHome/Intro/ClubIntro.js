import styles from "../../../styles/Club/Home/Intro/ClubIntro.module.scss";
import ClubInfo from "./ClubInfo";
import Desc from "./Desc";

const ClubIntro = () => {
  return (
    <div className={styles.container}>
      <ClubInfo />
      <Desc />
    </div>
  );
};

export default ClubIntro;
