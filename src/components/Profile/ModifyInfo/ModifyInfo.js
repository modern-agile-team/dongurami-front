import styles from '../../../styles/Profile/ModifyInfo.module.scss';
import { useEffect, useState } from 'react';
import SetImg from './SetImg';
import ModifyHeader from './ModifyHeader';
import ImmutableData from './ImmutableData';
import MutableData from './MutableData';
import { useRouter } from 'next/router';
import { getUserInfo } from 'apis/profile';

const ModifyInfo = () => {
  const [userInfo, setUserInfo] = useState({});
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [grade, setGrade] = useState(0);
  const [comp, setComp] = useState('수정');
  const router = useRouter();

  useEffect(() => {
    if (!router.isReady) return;
    getUserInfo(router.query.pid)
      .then((res) => {
        setUserInfo(res.data.profile);
        setEmail(res.data.profile.email);
        setPhoneNumber(res.data.profile.phoneNumber);
        setGrade(res.data.profile.grade);
      })
      .catch((err) => console.log(err));
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
      <SetImg comp={comp} setComp={setComp} />
    </div>
  );
};

export default ModifyInfo;
