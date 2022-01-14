import { useCallback, useEffect, useState, useMemo } from 'react';
import Scraps from './Scraps/Scraps';
import styles from 'styles/Profile/Profile.module.scss';
import UserInfo from './UserInfo/UserInfo';
import MyPost from './MyPost/MyPost';
import { useRouter } from 'next/router';
import { getScraps, getUserInfo } from 'apis/profile';
import { getUserData } from 'apis/user';
import getToken from 'utils/getToken';
import { useDispatch } from 'react-redux';
import { signOut } from 'redux/slices/user';
import ProfileHeader from './ProfileHeader/ProfileHeader';

function Profile() {
  const compObj = { scrap: '스크랩', myPosts: '작성글' };
  const dispatch = useDispatch();
  const [userInfo, setUserInfo] = useState({ id: '' });
  const [profile, setProfile] = useState({});
  const [id, setId] = useState('');
  const [clubNo, setClubNo] = useState(0);
  const [dataArr, setDataArr] = useState([]);
  const [token, setToken] = useState(getToken());
  const [isOpen, setIsOpen] = useState(false);
  const [leaveIsOpen, setLeaveIsOpen] = useState(false);
  // 작성글 state들
  const [myPosts, setMyPosts] = useState();
  const [myComments, setMyComments] = useState();
  const [category, setCategory] = useState(0);
  const [isHave, setIsHave] = useState(false);
  const boardArr = [
    '전체보기',
    '공지게시판',
    '자유게시판',
    'QnA게시판',
    '홍보게시판',
    '동아리공지게시판',
    '동아리활동내용'
  ];
  //

  const router = useRouter();

  //userInfo 컴포넌트로 이동
  const moveInfo = () => {
    router.replace({
      pathname: `/profile/${router.query.pid}`
    });
  };
  //
  // 전달된 변수에따라 페이지 이동
  const moveComp = (pageName) => {
    if (pageName === undefined) moveInfo();
    else if (pageName === 'scrap' && profile.clubs.length <= 0)
      alert('가입된 동아리가 없습니다.');
    else {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          category: pageName
        }
      });
    }
  };
  //
  //가입된 동아리 목록
  const joinedClubs = useMemo(() => {
    if (Object.keys(profile).length > 0) {
      return profile.clubs.map((club, index) => {
        return (
          <option value={club.no} key={index}>
            {club.name}
          </option>
        );
      });
    }
    return [];
  }, [profile]);
  //

  const logout = useCallback(() => {
    window.localStorage.removeItem('jwt');
    dispatch(signOut());
    router.push('/');
  }, [dispatch, router]);

  const baseImg =
    'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg';

  //미디어쿼리 값에 따라 보여주는 글자 수 변경
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
  //

  const setDefaultData = (data) => {
    setProfile(data.profile);
    setClubNo(data.profile.clubs.length === 0 ? 0 : data.profile.clubs[0].no);
  };

  const getUserId = async () => {
    const getUser = await getUserData();
    if (getUser.data) setUserInfo(getUser.data.user);
  };

  const getProfile = useCallback(async () => {
    if (router.query.pid) {
      await getUserInfo(router.query.pid, token)
        .then((res) => setDefaultData(res.data))
        .catch((err) => {
          alert(err.response.data.msg);
          router.back();
        });
    }
  }, [router, token]);

  const onClickQuitClubSpan = (name, number) => {
    if (window.confirm(`정말로 ${name}에서 탈퇴하시겠습니까?`)) {
      quitClub(profile.id, number)
        .then((res) => setNewToken(res))
        .catch((err) => alert(err.response.data.msg))
        .finally(() => setLeaveIsOpen(!setLeaveIsOpen));
    } else setLeaveIsOpen(false);
  };

  const setNewToken = (res) => {
    window.localStorage.setItem('jwt', res.data.jwt);
    alert(res.data.msg);
    router.reload();
  };

  const selectClub = (e) => {
    setClubNo(e.target.value);
    getScraps(profile.id, e.target.value)
      .then((res) => {
        setDataArr(
          res.data.scraps
            .concat(res.data.boards)
            .sort((a, b) => Date.parse(b.inDate) - Date.parse(a.inDate))
        );
      })
      .catch((err) => alert(err.reponse.data.msg));
  };

  const movePageFromMyItem = (el) => {
    switch (el.boardCategoryNum) {
      case 5:
        router.push(`/clubhome/${el.clubNo}/notice/${el.no}`);
        break;
      case 6:
        router.push(`/clubhome/${el.clubNo}?pid=${el.no}`);
        break;
      case 4:
        router.push(`/promotion?id=${el.no}`);
        break;
      case 3:
        router.push(`/questionAndAnswer/${el.no}`);
        break;
      case 2:
        router.push(`/free/${el.no}`);
        break;
      case 1:
        router.push(`/notice/${el.no}`);
        break;
      default:
        break;
    }
  };

  useEffect(async () => {
    if (!router.isReady) return;
    getProfile();
    await getUserId();
  }, [getProfile, getUserId]);

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
      <ProfileHeader
        profile={profile}
        userInfo={userInfo}
        router={router}
        moveComp={moveComp}
        compObj={compObj}
      />
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
          onClickQuitClubSpan={onClickQuitClubSpan}
        />
      )}
      {router.query.category === 'scrap' && (
        <Scraps
          profile={profile}
          clubNo={clubNo}
          getScraps={getScraps}
          dataArr={dataArr}
          setDataArr={setDataArr}
          id={id}
          matchTitle={matchTitle}
          joinedClubs={joinedClubs}
          selectClub={selectClub}
        />
      )}
      {router.query.category === 'myPosts' && (
        <MyPost
          matchTitle={matchTitle}
          router={router}
          myPosts={myPosts}
          setMyPosts={setMyPosts}
          myComments={myComments}
          setMyComments={setMyComments}
          category={category}
          setCategory={setCategory}
          isHave={isHave}
          setIsHave={setIsHave}
          boardArr={boardArr}
          movePageFromMyItem={movePageFromMyItem}
        />
      )}
    </div>
  );
}

export default Profile;
