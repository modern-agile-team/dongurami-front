import { useEffect, useState } from 'react';
import Scraps from './Scraps';
import styles from '../../styles/Profile/Profile.module.scss';
import UserInfo from './UserInfo';
import router from 'next/router';
import { getScraps, getUserInfo } from 'apis/profile';

function Profile() {
  const [comp, setComp] = useState('프로필');
  const [userInfo, setUserInfo] = useState({});
  const [profile, setProfile] = useState({});
  const [id, setId] = useState('201816035');
  const [clubNo, setClubNo] = useState(0);
  const [dataArr, setDataArr] = useState([]);

  const moveWriteScraps = () => {
    router.push(`/profile/${id}/writescraps`);
  };

  const logout = () => {
    console.log(1);
    // setToken("");
    // window.localStorage.setItem("jwt", token);
    // window.location.reload();
  };

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  useEffect(() => {
    getUserInfo(id)
      .then((res) => {
        setUserInfo(res.data.userInfo);
        setProfile(res.data.profile);
        setClubNo(res.datra.profile.clubs[0].no);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <button onClick={() => setComp('프로필')}>프로필</button>
        <button
          onClick={() => {
            if (profile.clubs.length > 0) {
              getScraps(profile.id, profile.clubs[0].no)
                .then((res) => {
                  setDataArr(
                    res.data.scrpas
                      .concat(res.data.board)
                      .sort(
                        (a, b) => Date.parse(b.inDate) - Date.parse(a.inDate)
                      )
                  );
                })
                .catch((err) => console.log(err.response.data.msg));
              setComp('스크랩');
            } else alert('가입된 동아리가 없습니다.');
          }}
        >
          스크랩
        </button>
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
        setClubNo={setClubNo}
        clubNo={clubNo}
        getScraps={getScraps}
        dataArr={dataArr}
      />
    </div>
  );
}

export default Profile;
