import styles from '../../../styles/Club/Home/Common/frame.module.scss';
import SideBar from './SideBar';
import ClubIntro from '../Intro/ClubIntro';
import Activities from '../Activities/Activities';
import Review from '../Review/Review';
import Calendar from '../Daily/Calendar';
import ClubNotice from '../Notice/ClubNotice';
import { useCallback, useEffect, useState } from 'react';
import Apply from '../Apply/Apply';

const Frame = () => {
  const [comp, setComp] = useState(1);
  const [isVisit, setIsVisit] = useState(false);

  const Comp = useCallback(() => {
    if (comp === 1) return <ClubIntro isVisit={isVisit} />;
    else if (comp === 2) return <ClubNotice />;
    else if (comp === 3) return <Activities />;
    else if (comp === 4) return <Calendar />;
    else if (comp === 5) return <Review />;
    else if (comp === 6) return <Apply />;
  }, [comp, isVisit]);

  useEffect(() => {
    if (comp === false) {
      setIsVisit(true);
    }
  }, [comp, isVisit]);
  return (
    <>
      <div className={styles.container}>
        <SideBar setComp={setComp} comp={comp} />
        <div className={styles.wrap}>
          <Comp comp={comp} />
        </div>
      </div>
    </>
  );
};

export default Frame;
