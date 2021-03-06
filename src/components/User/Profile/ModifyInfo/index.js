import styles from 'styles/Profile/ModifyInfo.module.scss';
import { useCallback, useEffect, useState } from 'react';
import ModifyHeader from './ModifyHeader';
import ImmutableData from './ImmutableData';
import MutableData from './MutableData';
import router, { useRouter } from 'next/router';
import { modifyInfo, getUserInfo } from 'apis/profile';
import { getS3PresignedURL, uploadImage } from 'apis/image';
import { getUserData } from 'apis/user';

const ModifyInfo = () => {
  const gradeArr = [1, 2, 3, 4];
  const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grade, setGrade] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const [imgUrl, setImgUrl] = useState();
  const [fileId, setFileId] = useState();
  const [placeholder, setPlaceholder] = useState();
  const [userId, setUserId] = useState('');
  const uRouter = useRouter();

  const onChangeImg = useCallback(
    async (e) => {
      const file = e.target.files[0];
      setFileId(file.name);
      const { preSignedPutUrl: presignedURL, readObjectUrl: imgURL } = (
        await getS3PresignedURL(file.name)
      ).data;
      await uploadImage(presignedURL, file);
      setImgUrl(imgURL);
    },
    [imgUrl]
  );
  const getUserId = async () => {
    const getUser = await getUserData();
    if (getUser.data) setUserId(getUser.data.user.id);
  };

  const getData = useCallback(
    (id) => {
      getUserInfo(uRouter.query.pid)
        .then((res) => {
          if (res.data.profile.id != id) {
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
    },
    [uRouter.query.pid]
  );

  const modifyBtn = useCallback(async () => {
    await modifyInfo(uRouter.query.pid, {
      email: email.replace(/ /g, '').length <= 0 ? placeholder[0] : email,
      phoneNumber:
        phoneNumber.replace(/ /g, '').length <= 0
          ? placeholder[1]
          : phoneNumber,
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
  }, [
    uRouter,
    email,
    placeholder,
    phoneNumber,
    imgUrl,
    grade,
    fileId,
    userInfo
  ]);

  useEffect(() => {
    if (!uRouter.isReady) return;
    if (userId.length > 4) getData(userId);
    getUserId();
  }, [uRouter, getData, userId]);

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  const movePage = useCallback(() => {
    if (userInfo.naverUserFlag) {
      alert('네이버 아이디로 가입한 회원은 비밀번호 변경을 할 수 없습니다.');
    } else router.push('/changepassword');
  }, [userInfo]);

  return (
    <div className={styles.wrap}>
      <div className={styles.profileBody}>
        <ModifyHeader
          setImgUrl={setImgUrl}
          onChangeImg={onChangeImg}
          imgUrl={imgUrl}
          setIsOpen={setIsOpen}
          isOpen={isOpen}
          baseImg={baseImg}
        />
        <div className={styles.data}>
          <ImmutableData
            userInfo={userInfo}
            grade={grade}
            setGrade={setGrade}
            gradeArr={gradeArr}
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
