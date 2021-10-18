import styles from '../../../styles/Club/Home/Intro/ClubInfo.module.scss';
import LogoUpdate from './LogoUpdate';
import { ResponsiveBar } from '@nivo/bar';
import { BsImage } from 'react-icons/bs';

const colors = ['#03BDA6', '#03B0C0', '#FEB942', '#F39019', '#FF7E79'];

function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min)) + min;
}

const ClubInfo = ({ infos, onChangeLogo }) => {
  const result = infos.result[0];
  const client = infos.clientInfo;
  const data = [
    { gender: '남자', '인원(명)': result.genderMan },
    { gender: '여자', '인원(명)': result.genderWomen }
  ];
  const ramdomColor = colors[getRandomInt(0, colors.length)];
  console.log(infos.result[0]);
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
          <ResponsiveBar
            data={data}
            keys={['인원(명)']}
            indexBy="gender"
            colors={ramdomColor}
            padding={0.4}
            layout="horizontal"
            enableGridY={false}
            margin={{ top: -20, right: 0, bottom: 0, left: 40 }}
            borderRadius={16}
            labelTextColor={'white'}
          />
        </div>
      </div>
      <div className={styles.imgContainer}>
        {infos.result[0].logoUrl === null ? (
          <BsImage />
        ) : (
          <img src={infos.result[0].logoUrl} alt={result.fileId} />
        )}
        {client.leader === 1 && <LogoUpdate onChangeLogo={onChangeLogo} />}
      </div>
    </div>
  );
};

export default ClubInfo;
