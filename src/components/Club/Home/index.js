import { useCallback, useEffect, useState } from 'react';
import { getClubInfo } from 'redux/slices/clubhome';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import { changeComp } from 'redux/slices/chageComp';
import Intro from './Intro';
import ClubNotice from './ClubNotice';
import Activities from './Activities';
import Calendar from './Calendar';
import Review from './Review';
import Apply from './Apply';
import SideBar from './SideBar';
import styles from 'styles/Club/Home/Common/frame.module.scss';
import Skeleton from './Skeleton';

const Club = () => {
  const dispatch = useDispatch();

  const comp = useSelector((state) => state.changeComp.comp);
  const clubs = useSelector((state) => state.clubhome);
  const router = useRouter();
  const clubId = router.query.id;

  if (router.query.pid && comp !== 3) {
    dispatch(changeComp(3));
  }

  const ClubMenu = useCallback(() => {
    if (comp === 1) return <Intro clubs={clubs} />;
    else if (comp === 2) return <ClubNotice clubs={clubs} />;
    else if (comp === 3) return <Activities clubs={clubs} />;
    else if (comp === 4) return <Calendar />;
    else if (comp === 5) return <Review clubs={clubs} />;
    else if (comp === 6) return <Apply clubs={clubs} />;
  }, [comp, clubs]);

  useEffect(() => {
    if (!clubId) return;
    dispatch(getClubInfo(clubId));
  }, [dispatch, clubId]);

  if (clubs.info === undefined) return null;
  return (
    <>
      <div className={styles.container}>
        <SideBar comp={comp} />
        {clubs.info !== undefined && (
          <div className={styles.wrap}>
            {clubs.loading ? <Skeleton /> : <ClubMenu comp={comp} />}
          </div>
        )}
      </div>
    </>
  );
};

export default Club;
