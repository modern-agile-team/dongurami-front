import { useEffect, useState } from 'react';
import Scraps from './Scraps';
import styles from '../../styles/Profile/Profile.module.scss';
import UserInfo from './UserInfo';
import router from 'next/router';
import axios from 'axios';
import getToken from 'utils/getToken';

function Profile() {
  const [comp, setComp] = useState('프로필');
  const [userInfo, setUserInfo] = useState({});
  const [profile, setProfile] = useState({});
  const [token, setToken] = useState(getToken());
  // const [scrapData, setScrapData] = useState();
  const moveWriteScraps = () => {
    router.push('/profile/writescraps');
  };

  const getUserInfo = (token) => {
    axios
      .get(`http://3.36.72.145:8080/api/profile/${201816035}`, {
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          'x-auth-token': token
        }
      })
      .then((res) => {
        setUserInfo(res.data.userInfo);
        setProfile(res.data.profile);
      })
      .catch((err) => console.log(err));
  };

  const getScraps = () => {
    // axios.get()
    console.log(1);
  };
  useEffect(() => {
    getUserInfo(token);
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
