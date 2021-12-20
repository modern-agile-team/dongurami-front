import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import LeaderInfo from './LeaderInfo';
import SexRatio from './SexRatio';

const BasicInfo = ({
  clubs,
  leader,
  openOptions,
  setOpenOptions,
  openMessage,
  setOpenMessage
}) => {
  return (
    <div className={styles.desc}>
      <div className={styles.thumbnail}>
        <h1>{clubs.name}</h1>
      </div>
      <div className={styles.categori}>
        <p>{clubs.category} 동아리</p>
      </div>
      <LeaderInfo
        openOptions={openOptions}
        setOpenOptions={setOpenOptions}
        openMessage={openMessage}
        setOpenMessage={setOpenMessage}
        infos={leader}
      />
      <SexRatio clubs={clubs} />
    </div>
  );
};

export default BasicInfo;
