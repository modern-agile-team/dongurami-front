import styles from '../../../styles/Club/Home/Intro/ClubInfo.module.scss';
import LogoUpdate from './LogoUpdate';
import { ResponsiveBar } from '@nivo/bar';
import { BsImage } from 'react-icons/bs';

import LeaderInfo from './LeaderInfo';

const ClubInfo = ({ infos, onChangeLogo }) => {
  const result = infos.result[0];
  const client = infos.clientInfo;
  const data = [
    { gender: '여자', '인원(명)': result.genderWomen },
    { gender: '남자', '인원(명)': result.genderMan }
  ];
  return (
    <div className={styles.container}>
      <div className={styles.desc}>
        <div className={styles.thumbnail}>
          <h1>{result.name}</h1>
        </div>
        <div className={styles.categori}>
          <p>{result.category} 동아리</p>
        </div>
        <LeaderInfo infos={infos.leaderInfo[0]} />
        <div className={styles.population}>
          <ResponsiveBar
            data={data}
            keys={['인원(명)']}
            indexBy="gender"
            colors="gray"
            padding={0.6}
            layout="horizontal"
            enableGridY={false}
            margin={{ top: 0, right: 0, bottom: 0, left: 40 }}
            borderRadius={6}
            labelTextColor={'white'}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        {infos.result[0].logoUrl === null ? (
          <BsImage />
        ) : (
          <div className={styles.img}>
            <img src={infos.result[0].logoUrl} alt={result.fileId} />
          </div>
        )}
        {client.leader === 1 && <LogoUpdate onChangeLogo={onChangeLogo} />}
      </div>
    </div>
  );
};

export default ClubInfo;
