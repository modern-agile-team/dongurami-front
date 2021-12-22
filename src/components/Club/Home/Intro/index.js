import styles from 'styles/Club/Home/Intro/ClubIntro.module.scss';
import Info from './Info';
import Desc from './Desc';
import React, { useCallback, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Skeleton from './Skeleton';
import { useDispatch, useSelector } from 'react-redux';
import { getClubInfo, putDesc } from 'redux/slices/clubhome';
import { patchIntroDesc, putLogo } from 'apis/clubhome';
import { getS3PresignedURL, uploadImage } from 'apis/image';

const Intro = ({ visitTime }) => {
  const [isDescriptionUpdate, setIsDescriptionUpdate] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [introDesc, setIntroDesc] = useState('');
  const [openOptions, setOpenOptions] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);

  const router = useRouter();
  const clubId = router.query.id;

  const dispatch = useDispatch();

  const clubInfo = useSelector((state) => state.clubhome.info);
  const error = useSelector((err) => err.clubhome.error);

  const toggleDescription = () => {
    setIsDescriptionUpdate(!isDescriptionUpdate);
  };

  const patchIntroduction = (data) => {
    return patchIntroDesc(data, clubId).then(dispatch(putDesc(data, clubId)));
  };

  const putClubLogo = (data) => {
    return putLogo(data, clubId)
      .then(dispatch(putDesc(data, clubId)))
      .catch((err) => alert(err.response.data.msg));
  };

  // 동아리 소개 수정
  const onDescSubnmit = async () => {
    patchIntroduction({
      leader: clubInfo.clientInfo.leader,
      introduce: introDesc
    }).then(() => {
      alert('동아리 소개글이 수정되었습니다.');
      dispatch(getClubInfo(clubId));
    });
    toggleDescription();
  };

  // 로고 수정
  const onChangeLogo = async (e) => {
    const file = e.target.files[0];
    const { preSignedPutUrl: presignedURL, readObjectUrl: imageURL } = (
      await getS3PresignedURL(file.name)
    ).data;
    await uploadImage(presignedURL, file);
    await putClubLogo({
      leader: clubInfo.clientInfo.leader,
      logoUrl: `${imageURL}`
    });
    dispatch(getClubInfo(clubId));
  };

  const printError = useCallback(() => {
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
  }, [error, router]);

  useEffect(() => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), visitTime === 0 ? 500 : 50);
  }, [visitTime]);

  useEffect(() => {
    printError();
  }, [printError]);

  useEffect(() => {
    if (clubInfo) setIntroDesc(clubInfo.result[0].introduce);
  }, [clubInfo]);

  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, []);

  if (!clubInfo) return null;

  return (
    <div className={styles.container}>
      {isLoading ? (
        <Skeleton />
      ) : (
        <>
          <Info
            infos={clubInfo}
            onChangeLogo={onChangeLogo}
            openOptions={openOptions}
            setOpenOptions={setOpenOptions}
            openMessage={openMessage}
            setOpenMessage={setOpenMessage}
          />
          <Desc
            infos={clubInfo}
            onDescSubnmit={onDescSubnmit}
            toggleDescription={toggleDescription}
            isDescriptionUpdate={isDescriptionUpdate}
            introDesc={introDesc}
            setIntroDesc={setIntroDesc}
          />
        </>
      )}
    </div>
  );
};

export default Intro;
