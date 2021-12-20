import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import ClubLogo from './Logo/ClubLogo';
import BasicInfo from './Basic/BasicInfo';

const Info = ({ infos, onChangeLogo }) => {
  return (
    <div className={styles.container}>
      <BasicInfo infos={infos} />
      <ClubLogo infos={infos} onChangeLogo={onChangeLogo} />
    </div>
  );
};

export default Info;
