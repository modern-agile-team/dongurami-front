import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import ClubLogo from './Logo/ClubLogo';
import BasicInfo from './Basic/BasicInfo';

const Info = ({
  clubs,
  onChangeLogo,
  openOptions,
  setOpenOptions,
  openMessage,
  setOpenMessage
}) => {
  const leader = clubs.info.result.leaderInfo;
  const clubInfo = clubs.info.result.clubInfo;
  const client = clubs.info.result.clientInfo;
  return (
    <div className={styles.container}>
      <BasicInfo
        clubs={clubInfo}
        leader={leader}
        openOptions={openOptions}
        setOpenOptions={setOpenOptions}
        openMessage={openMessage}
        setOpenMessage={setOpenMessage}
      />
      <ClubLogo clubs={clubInfo} client={client} onChangeLogo={onChangeLogo} />
    </div>
  );
};

export default Info;
