import styles from '../../../styles/Club/Home/Intro/ClubInfo.module.scss';
import LogoUpdate from './LogoUpdate';

const ClubInfo = ({ infos, onChangeLogo }) => {
  const result = infos.result[0];
  const client = infos.clientInfo;

  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <div className={styles.thumbnail}>
          <h1>{result.name}</h1>
        </div>
        <div className={styles.categori}>
          <p>{result.category} 동아리</p>
        </div>
        <div className={styles.population}>
          <span>동아리원: {result.genderWomen + result.genderMan} 명 </span>
          <span> 남: {result.genderMan} 명</span>
          <span> 여: {result.genderWomen} 명</span>
        </div>
      </div>
      <div className={styles.imgContainer}>
        <img src={infos.result[0].logoUrl} alt={result.fileId} />
        {client.leader === 1 && <LogoUpdate onChangeLogo={onChangeLogo} />}
      </div>
    </div>
  );
};

export default ClubInfo;
