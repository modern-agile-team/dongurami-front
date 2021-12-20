import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import LogoUpdate from './LogoUpdate';
import { BsImage } from 'react-icons/bs';

const ClubLogo = ({ clubs, client, onChangeLogo }) => {
  return (
    <div className={styles.imgContainer}>
      {clubs.logoUrl === null ? (
        <BsImage />
      ) : (
        <img src={clubs.logoUrl} alt={clubs.fileId} />
      )}
      {client.leader === 1 && <LogoUpdate onChangeLogo={onChangeLogo} />}
    </div>
  );
};

export default ClubLogo;
