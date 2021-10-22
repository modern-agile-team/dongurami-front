import styles from '../../../styles/Club/Home/Intro/ClubIntro.module.scss';
import ClubInfo from './ClubInfo';
import Desc from './Desc';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Skeleton from './Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getClubInfo, putDesc } from 'redux/slices/clubhome';
import { patchIntroDesc, putLogo } from 'apis/clubhome';
import { getS3PresignedURL, uploadImage } from 'apis/image';

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

  const patchClubIntro = (data) => {
    return patchIntroDesc(data, clubId).then(dispatch(putDesc(data, clubId)));
  };

  const putClubLogo = (data) => {
    return putLogo(data, clubId).then(dispatch(putDesc(data, clubId)));
  };

  // 동아리 소개 수정
  const onDescSubnmit = async () => {
    patchClubIntro({ leader: infos.clientInfo.leader, introduce: introDesc })
      .then(() => {
        alert('동아리 소개글이 수정되었습니다.');
        dispatch(getClubInfo(clubId));
      })
      .catch((err) => {
        alert(err.response.data.msg);
        router.reload();
      });
    setDescUpdate(!descUpdate);
  };

  // 로고 수정
  const onChangeLogo = async (e) => {
    const file = e.target.files[0];
    const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (
      await getS3PresignedURL({ img: e.target.files[0].name })
    ).data;
    await uploadImage(presignedURL, file);
    await putClubLogo({
      leader: infos.clientInfo.leader,
      logoUrl: imageURL
    }).catch((err) => {
      alert(err.response.data.msg);
      router.reload();
    });
    dispatch(getClubInfo(clubId));
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
  }, [router, error]);

  useEffect(() => {
    if (infos) {
      setIntroDesc(infos.result[0].introduce);
    }
  }, [infos]);

  if (!infos) return null;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <ClubInfo infos={infos} onChangeLogo={onChangeLogo} />
          <Desc
            infos={infos}
            onDescSubnmit={onDescSubnmit}
            onDescUpdate={onDescUpdate}
            descUpdate={descUpdate}
            introDesc={introDesc}
            setIntroDesc={setIntroDesc}
          />
        </>
      )}
    </div>
  );
};

export default ClubIntro;
