import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { useEffect, useState } from 'react';
import SetImg from './SetImg';
import ModifyHeader from './ModifyHeader';
import ImmutableData from './ImmutableData';
import MutableData from './MutableData';
import { useRouter } from 'next/router';
import { modifyInfo, getUserInfo } from 'apis/profile';

const ModifyInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grade, setGrade] = useState(0);
  const [comp, setComp] = useState('수정');
  const router = useRouter();

  const getData = () => {
    getUserInfo(router.query.pid)
      .then((res) => {
        setUserInfo(res.data.profile);
        setEmail(res.data.profile.email);
        setPhoneNumber(res.data.profile.phoneNumber);
        setGrade(res.data.profile.grade);
      })
      .catch((err) => console.log(err));
  };

  const modifyBtn = () => {
    modifyInfo(router.query.pid, {
      email: email,
      phoneNumber: phoneNumber,
      grade: grade,
      profileImageUrl: userInfo.profileImageUrl,
      fileId: userInfo.fileId
    })
      .then((res) => {
        console.log(res.data.msg);
      })
      .catch((err) => console.log(err.response.data));
    getData();
  };

  useEffect(() => {
    if (!router.isReady) return;
    getData();
  }, [router]);

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  return (
    <div className={styles.wrap}>
      <ModifyHeader userInfo={userInfo} setComp={setComp} baseImg={baseImg} />
      <ImmutableData userInfo={userInfo} grade={grade} setGrade={setGrade} />
      <MutableData
        userInfo={userInfo}
        setEmail={setEmail}
        setPhoneNumber={setPhoneNumber}
      />
      <button onClick={() => modifyBtn()}>수정</button>
      <SetImg comp={comp} setComp={setComp} />
    </div>
  );
};

export default ModifyInfo;
