import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import LogoUpdate from './LogoUpdate';
import { BsImage } from 'react-icons/bs';

const ClubLogo = ({ infos, onChangeLogo }) => {
  const result = infos.result[0];
  const client = infos.clientInfo;

  return (
    <div className={styles.imgContainer}>
      {result.logoUrl === null ? (
        <BsImage />
      ) : (
        <img src={result.logoUrl} alt={result.fileId} />
      )}
      {client.leader === 1 && <LogoUpdate onChangeLogo={onChangeLogo} />}
    </div>
  );
};

export default ClubLogo;
