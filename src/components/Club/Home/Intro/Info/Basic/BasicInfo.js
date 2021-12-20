import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import LeaderInfo from './LeaderInfo';
import SexRatio from './SexRatio';

const BasicInfo = ({ infos }) => {
  const result = infos.result[0];

  return (
    <div className={styles.desc}>
      <div className={styles.thumbnail}>
        <h1>{result.name}</h1>
      </div>
      <div className={styles.categori}>
        <p>{result.category} 동아리</p>
      </div>
      <LeaderInfo infos={infos.leaderInfo[0]} />
      <SexRatio infos={infos} />
    </div>
  );
};

export default BasicInfo;
