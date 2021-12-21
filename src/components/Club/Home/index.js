import { useCallback, useEffect, useState } from 'react';
import { getClubInfo } from 'redux/slices/clubhome';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeComp } from 'redux/slices/chageComp';
import Intro from './Intro';
import ClubNotice from './Notice/ClubNotice';
import Activities from './Activities/Activities';
import Calendar from './Calendar';
import Review from './Review/Review';
import Apply from './Apply';
import SideBar from './SideBar';
import styles from 'styles/Club/Home/Common/frame.module.scss';

const Club = () => {
  const [isVisit, setIsVisit] = useState(false);

  const dispatch = useDispatch();

  const comp = useSelector((state) => state.changeComp.comp);

  const router = useRouter();
  const clubId = router.query.id;

  if (router.query.pid && comp !== 3) {
    dispatch(changeComp(3));
  }

  const ClubMenu = useCallback(() => {
    if (comp === 1) return <Intro isVisit={isVisit} />;
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

export default Club;
