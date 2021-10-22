import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { useEffect, useState } from 'react';
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
  const [comp, setComp] = useState('수정');
  // const [pUrl, setPUrl] = useState();
  const [imgUrl, setImgUrl] = useState();
  const [fileId, setFileId] = useState();
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

  const getData = () => {
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
        }
      })
      .catch((err) => console.log(err));
  };

  const modifyBtn = () => {
    modifyInfo(uRouter.query.pid, {
      email,
      phoneNumber,
      grade,
      profileImageUrl: imgUrl,
      fileId
    })
      .then((res) => {
        console.log(res.data.msg);
      })
      .catch((err) => console.log(err.response.data));
    router.push(`/profile/${userInfo.id}`);
  };

  useEffect(() => {
    if (!uRouter.isReady) return;
    getData();
  }, [uRouter]);

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  return (
    <div className={styles.wrap}>
      <div className={styles.profileBody}>
        <ModifyHeader
          imgUrl={imgUrl}
          onChangeImg={onChangeImg}
          userInfo={userInfo}
          setComp={setComp}
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
        <button className={styles.modifyBtn} onClick={() => modifyBtn()}>
          <span>✏️ 수정</span>
        </button>
      </div>
    </div>
  );
};

export default ModifyInfo;
