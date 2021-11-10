import styles from '../../../styles/Club/Home/Common/frame.module.scss';
import SideBar from './SideBar';
import ClubIntro from '../Intro/ClubIntro';
import Activities from '../Activities/Activities';
import Review from '../Review/Review';
import Calendar from '../Daily/Calendar';
import ClubNotice from '../Notice/ClubNotice';
import { useCallback, useEffect, useState } from 'react';
import Apply from '../Apply/Apply';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { getClubInfo } from 'redux/slices/clubhome';

const Frame = () => {
  const [isVisit, setIsVisit] = useState(false);

  const dispatch = useDispatch();

  const comp = useSelector((state) => state.changeComp.comp);

  const router = useRouter();
  const clubId = router.query.id;

  const ClubMenu = useCallback(() => {
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

  useEffect(() => {
    if (!clubId) return;
    dispatch(getClubInfo(clubId));
  }, [dispatch, clubId]);

  return (
    <>
      <div className={styles.container}>
        <SideBar comp={comp} />
        <div className={styles.wrap}>
          <ClubMenu comp={comp} />
        </div>
      </div>
    </>
  );
};

export default Frame;
