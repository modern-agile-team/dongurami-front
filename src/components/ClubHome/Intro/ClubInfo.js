import styles from "../../../styles/Club/Home/Intro/ClubInfo.module.scss";

const ClubInfo = ({ name, logoUrl, fileId, genderMan, genderWomen }) => {
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <div className={styles.thumnail}>
          <h1>{name}</h1>
        </div>
        <div className={styles.categori}>
          <p>IT 동아리</p>
        </div>
        <div className={styles.population}>
          <span>Total: ({genderWomen + genderMan}) </span>
          <span> male: ({genderMan}) </span>
          <span> female: ({genderWomen})</span>
        </div>
      </div>
      <div>
        <img src={logoUrl} alt={fileId} />
      </div>
    </div>
  );
};

export default ClubInfo;
