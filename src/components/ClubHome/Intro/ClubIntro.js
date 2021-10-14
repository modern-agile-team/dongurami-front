import styles from '../../../styles/Club/Home/Intro/ClubIntro.module.scss';
import ClubInfo from './ClubInfo';
import Desc from './Desc';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Skeleton from './Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getClubInfo, putDesc } from 'redux/slices/clubhome';
import { putIntroDesc } from 'apis/clubhome';

const ClubIntro = ({ visitTime }) => {
  const [descUpdate, setDescUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [introDesc, setIntroDesc] = useState('');

  const router = useRouter();
  const clubId = router.query.id;

  const dispatch = useDispatch();

  const infos = useSelector((state) => state.clubhome.info);
  const error = useSelector((err) => err.clubhome.error);

  const onDescUpdate = () => {
    setDescUpdate(!descUpdate);
  };

  const onDescChange = (e) => {
    setIntroDesc(e.target.value);
  };

  // 동아리 소개 수정
  const onDescSubnmit = async () => {
    putIntroDesc({ introduce: introDesc }, clubId)
      .then(dispatch(putDesc({ introduce: introDesc }, clubId)))
      .then(() => {
        alert('동아리 소개글이 수정되었습니다.');
        dispatch(getClubInfo(clubId));
      });
    setDescUpdate(!descUpdate);
  };

  useEffect(() => {
    if (!clubId) return;
    setIsLoading(true);
    dispatch(getClubInfo(clubId));
    setTimeout(() => setIsLoading(false), visitTime === 0 ? 500 : 50);
  }, [dispatch, clubId, visitTime]);

  useEffect(() => {
    if (!error) return;
    else if (error.message.includes('401')) {
      alert('로그인 후 이용해주세요.');
      router.back();
    } else if (error.message.includes('404')) {
      alert('존재하지 않는 동아리입니다.');
      router.back();
    } else {
      alert('알 수 없는 오류입니다. 개발자에게 문의해주세요');
      router.back();
    }
  }, [error]);

  if (!infos) return null;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <ClubInfo infos={infos} />
          <Desc
            infos={infos}
            onDescSubnmit={onDescSubnmit}
            onDescChange={onDescChange}
            onDescUpdate={onDescUpdate}
            descUpdate={descUpdate}
          />
        </>
      )}
    </div>
  );
};

export default ClubIntro;
