import { useEffect, useState } from 'react';
import Scraps from './Scraps';
import styles from '../../styles/Profile/Profile.module.scss';
import UserInfo from './UserInfo';
import router, { useRouter } from 'next/router';
import { getScraps, getUserInfo } from 'apis/profile';
import getToken from 'utils/getToken';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/slices/user';

function Profile() {
  const dispatch = useDispatch();
  const [comp, setComp] = useState('프로필');
  const [userInfo, setUserInfo] = useState({});
  const [profile, setProfile] = useState({});
  const [id, setId] = useState('');
  const [clubNo, setClubNo] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [token, setToken] = useState(getToken());
  const [isOpen, setIsOpen] = useState(false);

  const uRouter = useRouter();

  const logout = () => {
    window.localStorage.removeItem('jwt');
    dispatch(signOut());
    router.push('/');
  };

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  useEffect(() => {
    if (!uRouter.isReady) return;
    setId(uRouter.query.pid);
    setToken(getToken());
    getUserInfo(uRouter.query.pid, token)
      .then((res) => {
        setUserInfo(res.data.userInfo);
        setProfile(res.data.profile);
        setClubNo(
          res.data.profile.clubs.length === 0 ? 0 : res.data.profile.clubs[0].no
        );
      })
      .catch((err) => {
        alert(err);
        router.back();
      });
  }, [token, uRouter]);

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <button
          style={comp === '프로필' ? { borderRight: 0 } : null}
          className={styles.profileBtn}
          onClick={() => setComp('프로필')}
        >
          프로필
        </button>
        <button
          style={comp === '스크랩' ? { borderRight: 0 } : null}
          className={styles.scrapBtn}
          onClick={() => {
            if (profile.clubs.length > 0) {
              getScraps(profile.id, profile.clubs[0].no)
                .then((res) => {
                  setDataArr(
                    res.data.scraps
                      .concat(res.data.boards)
                      .sort(
                        (a, b) => Date.parse(b.inDate) - Date.parse(a.inDate)
                      )
                  );
                })
                .catch((err) => {
                  alert('로그인 한 사용자만 열람할 수 있습니다.');
                  setComp('프로필');
                });
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
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <Scraps
        uRouter={uRouter}
        userInfo={userInfo}
        profile={profile}
        comp={comp}
        setClubNo={setClubNo}
        clubNo={clubNo}
        getScraps={getScraps}
        dataArr={dataArr}
        setDataArr={setDataArr}
        id={id}
      />
    </div>
  );
}

export default Profile;
