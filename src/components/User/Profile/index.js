import { useCallback, useEffect, useState } from 'react';
import Scraps from './Scraps/Scraps';
import styles from 'styles/Profile/Profile.module.scss';
import UserInfo from './UserInfo/UserInfo';
import MyPost from './MyPost/MyPost';
import { useRouter } from 'next/router';
import { getScraps, getUserInfo } from 'apis/profile';
import getToken from 'utils/getToken';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/slices/user';

function Profile() {
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({});
  const [profile, setProfile] = useState({});
  const [id, setId] = useState('');
  const [clubNo, setClubNo] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [token, setToken] = useState(getToken());
  const [isOpen, setIsOpen] = useState(false);
  const [leaveIsOpen, setLeaveIsOpen] = useState(false);

  const router = useRouter();

  const moveInfo = () => {
    router.replace({
      pathname: `/profile/${router.query.pid}`
    });
  };
  const moveComp = (pageName) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        category: pageName
      }
    });
  };

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt');
    dispatch(signOut());
    router.push('/');
  }, [dispatch, router]);

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  const matchTitle = useCallback((title, mobile, pad, deskTop) => {
    if (matchMedia('screen and (max-width: 280px)').matches) {
      return title.length >= mobile
        ? title.substring(0, mobile - 2) + '..'
        : title;
    } else if (matchMedia('screen and (max-width: 530px)').matches) {
      return title.length >= pad ? title.substring(0, pad - 2) + '..' : title;
    }
    return title.length >= deskTop
      ? title.substring(0, deskTop - 2) + '..'
      : title;
  }, []);

  const setState = (data) => {
    setUserInfo(data.userInfo);
    setProfile(data.profile);
    setClubNo(data.profile.clubs.length === 0 ? 0 : data.profile.clubs[0].no);
  };

  const fetchUserInfo = useCallback(async () => {
    if (router.query.pid) {
      await getUserInfo(router.query.pid, token)
        .then((res) => setState(res.data))
        .catch((err) => {
          alert(err.response.data.msg);
          router.back();
        });
    }
  }, [router, token]);

  useEffect(() => {
    if (!router.isReady) return;
    fetchUserInfo();
  }, [router, token]);

  useEffect(() => {
    if (!router.isReady) return;
    setId(router.query.pid);
    setToken(getToken());
  }, [router]);

  useEffect(() => {
    document.body.style.overflow = 'visible';
  }, []);

  return (
    <div className={styles.container}>
      <div className={styles.profileHeader}>
        <button
          style={
            router.query.category !== undefined
              ? { background: '#f2f2f2' }
              : null
          }
          className={styles.profileBtn}
          onClick={() => {
            moveInfo();
          }}
        >
          프로필
        </button>
        {userInfo.id === profile.id && (
          <button
            style={
              router.query.category !== 'scrap'
                ? { background: '#f2f2f2' }
                : null
            }
            className={styles.scrapBtn}
            onClick={() => {
              if (profile.clubs.length > 0) {
                moveComp('scrap');
              } else alert('가입된 동아리가 없습니다.');
            }}
          >
            스크랩
          </button>
        )}
        {userInfo.id === profile.id && (
          <button
            style={
              router.query.category !== 'myPosts'
                ? { background: '#f2f2f2' }
                : null
            }
            className={styles.myPost}
            onClick={() => {
              moveComp('myPosts');
            }}
          >
            작성글
          </button>
        )}
      </div>
      {router.query.category === undefined && (
        <UserInfo
          logout={logout}
          baseImg={baseImg}
          userInfo={userInfo}
          profile={profile}
          router={router.query.category}
          isOpen={isOpen}
          setIsOpen={setIsOpen}
          leaveIsOpen={leaveIsOpen}
          setLeaveIsOpen={setLeaveIsOpen}
          clubNo={clubNo}
        />
      )}
      {router.query.category === 'scrap' && (
        <Scraps
          userInfo={userInfo}
          profile={profile}
          setClubNo={setClubNo}
          clubNo={clubNo}
          getScraps={getScraps}
          dataArr={dataArr}
          setDataArr={setDataArr}
          id={id}
          matchTitle={matchTitle}
        />
      )}
      {router.query.category === 'myPosts' && (
        <MyPost matchTitle={matchTitle} />
      )}
    </div>
  );
}

export default Profile;
