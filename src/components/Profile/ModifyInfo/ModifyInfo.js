import styles from 'styles/Profile/ModifyInfo.module.scss';
import { useCallback, useEffect, useState } from 'react';
import ModifyHeader from './ModifyHeader';
import ImmutableData from './ImmutableData';
import MutableData from './MutableData';
import router, { useRouter } from 'next/router';
import { modifyInfo, getUserInfo } from 'apis/profile';
import { getS3PresignedURL, uploadImage } from 'apis/image';

const ModifyInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grade, setGrade] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState();
  const [fileId, setFileId] = useState();
  const [placeholder, setPlaceholder] = useState();
  const uRouter = useRouter();

  const onChangeImg = async (e) => {
    const file = e.target.files[0];
    setFileId(file.name);
    const { preSignedPutUrl: presignedURL, readObjectUrl: imgURL } = (
      await getS3PresignedURL(file.name)
    ).data;
    await uploadImage(presignedURL, file);
    setImgUrl(imgURL);
  };

  const getData = useCallback(() => {
    getUserInfo(uRouter.query.pid)
      .then((res) => {
        if (res.data.profile.id !== res.data.userInfo.id) {
          alert('본인의 정보가 아닙니다.');
          router.back();
        } else {
          setUserInfo(res.data.profile);
          setEmail(res.data.profile.email);
          setPhoneNumber(res.data.profile.phoneNumber);
          setGrade(res.data.profile.grade);
          setImgUrl(res.data.profile.profileImageUrl);
          setPlaceholder([
            res.data.profile.email,
            res.data.profile.phoneNumber
          ]);
        }
      })
      .catch((err) => alert(err.response.data.msg));
  }, [uRouter.query.pid]);

  const modifyBtn = async () => {
    if (email.replace(/ /g, '').length <= 0) setEmail(placeholder[0]);
    if (phoneNumber.replace(/ /g, '').length <= 0) {
      setPhoneNumber(placeholder[1]);
    }
    await modifyInfo(uRouter.query.pid, {
      email,
      phoneNumber,
      grade,
      profileImageUrl: imgUrl,
      fileId
    })
      .then((res) => {
        res.data.jwt !== undefined &&
          window.localStorage.setItem('jwt', res.data.jwt);
        router.push(`/profile/${userInfo.id}`);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  useEffect(() => {
    if (!uRouter.isReady) return;
    getData();
  }, [uRouter, getData]);

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  const movePage = () => {
    if (userInfo.isNaverUser === 1) {
      alert('네이버 아이디로 가입한 회원은 비밀번호 변경을 할 수 없습니다.');
    } else router.push('/changepassword');
  };

  return (
    <div className={styles.wrap}>
      <div className={styles.profileBody}>
        <ModifyHeader
          setImgUrl={setImgUrl}
          onChangeImg={onChangeImg}
          imgUrl={imgUrl}
          userInfo={userInfo}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          baseImg={baseImg}
        />
        <div className={styles.data}>
          <ImmutableData
            userInfo={userInfo}
            grade={grade}
            setGrade={setGrade}
          />
          <MutableData
            userInfo={userInfo}
            setEmail={setEmail}
            setPhoneNumber={setPhoneNumber}
          />
        </div>

        <span className={styles.psword} onClick={() => movePage()}>
          비밀번호 변경
        </span>
        <button className={styles.modifyBtn} onClick={() => modifyBtn()}>
          <span>✏️ 수정</span>
        </button>
      </div>
    </div>
  );
};

export default ModifyInfo;
