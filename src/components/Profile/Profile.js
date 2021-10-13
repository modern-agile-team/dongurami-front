import { useEffect, useState } from 'react';
import Scraps from './Scraps';
import styles from '../../styles/Profile/Profile.module.scss';
import UserInfo from './UserInfo';
import router from 'next/router';
import { getUserInfo } from 'apis/profile';
import getToken from 'utils/getToken';

function Profile() {
  const [comp, setComp] = useState('프로필');
  const [userInfo, setUserInfo] = useState({});
  const [profile, setProfile] = useState({});
  const [id, setId] = useState('201816035');
  //get요청때 쓰는 아이디는 사용자 이름 눌렀을때 props로 받을예정

  const moveWriteScraps = () => {
    router.push('/profile/writescraps');
  };

  const getScraps = () => {
    // axios.get()
    console.log(1);
  };
  useEffect(() => {
    getUserInfo(id)
      .then((res) => {
        console.log(res);
        setUserInfo(res.data.userInfo);
        setProfile(res.data.profile);
      })
      .catch((err) => console.log(err));
  }, []);

  const logout = () => {
    console.log(1);
    // setToken("");
    // window.localStorage.setItem("jwt", token);
    // window.location.reload();
  };

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';
  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <button onClick={() => setComp('프로필')}>프로필</button>
        <button onClick={() => setComp('스크랩')}>스크랩</button>
      </div>
      <UserInfo
        logout={logout}
        baseImg={baseImg}
        userInfo={userInfo}
        profile={profile}
        comp={comp}
      />
      <Scraps
        moveWriteScraps={moveWriteScraps}
        userInfo={userInfo}
        profile={profile}
        comp={comp}
      />
    </div>
  );
}

export default Profile;
