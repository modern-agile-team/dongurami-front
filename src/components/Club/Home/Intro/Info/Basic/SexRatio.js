import styles from 'styles/Club/Home/Intro/ClubInfo.module.scss';
import { ResponsiveBar } from '@nivo/bar';

const SexRatio = ({ clubs }) => {
  const data = [
    { gender: '여자', '인원(명)': clubs.gender.women },
    { gender: '남자', '인원(명)': clubs.gender.man }
  ];

  return (
    <div className={styles.population}>
      <ResponsiveBar
        data={[...data]}
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
  );
};

export default SexRatio;
