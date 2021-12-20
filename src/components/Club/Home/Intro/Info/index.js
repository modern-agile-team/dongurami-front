import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import ClubLogo from './Logo/ClubLogo';
import BasicInfo from './Basic/BasicInfo';

const Info = ({
  infos,
  onChangeLogo,
  openOptions,
  setOpenOptions,
  openMessage,
  setOpenMessage
}) => {
  const leader = infos.leaderInfo[0];
  const clubs = infos.result[0];
  const client = infos.clientInfo;

  return (
    <div className={styles.container}>
      <BasicInfo
        clubs={clubs}
        leader={leader}
        openOptions={openOptions}
        setOpenOptions={setOpenOptions}
        openMessage={openMessage}
        setOpenMessage={setOpenMessage}
      />
      <ClubLogo clubs={clubs} client={client} onChangeLogo={onChangeLogo} />
    </div>
  );
};

export default Info;
