import styles from '../../../styles/Common/Header/Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import Hamburger from 'hamburger-react';
import HeaderBoard from './HeaderBoard';
import HeaderUser from './HeaderUser';
import HeaderMobileBoard from './HeaderMobileBoard';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { getUserData } from 'apis/user';
import Alarm from '../Alarm';
import MessageAlarm from '../letter';

function Header({
  token,
  alarmList,
  messageList,
  getAlarmData,
  getMessage,
  open,
  setOpen
}) {
  const [user, setUser] = useState();
  const [userProflie, setUserProfile] = useState();
  const [nowPath, setNowPath] = useState('');

  const router = useRouter();
  const closeRef = useRef(null);

  //현재경로 표시
  useEffect(() => {
    setNowPath(router.pathname);
  }, [router.pathname]);

  useEffect(() => {
    window.localStorage.setItem('nowPath', nowPath);
  }, [nowPath]);

  //영역밖 클릭 시 사이드바 제거
  function handleClickOutside(event) {
    if (closeRef.current && !closeRef.current.contains(event.target)) {
      setOpen(false);
    }
  }
  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  //마이페이지 routing
  const showProfile = () => {
    router.push(`/profile/${user}`);
  };

  //토큰 유효성 검사
  useEffect(() => {
    if (token) {
      getUserData()
        .then((res) => {
          setUser(res.data.user.id);
          setUserProfile(res.data.user.profilePath);
        })
        .catch((_) => {
          window.localStorage.removeItem('jwt');
          window.location.reload();
        });
    }
  }, [token]);

  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.myHeader} ref={closeRef}>
          <Link href="/" passHref>
            <img
              alt="동그라미"
              src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fcfb255ff-10a0-4095-aabb-3b0c62e1ebf6%2Flogo-removebg.png?table=block&id=58d3c93f-aa6e-4b62-9c49-df57fae3f5fe&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=2000&userId=&cache=v2"
            />
          </Link>
          <Hamburger rounded toggled={open} toggle={setOpen} size={25} />
          <div className={styles.topMenu}>
            <ul className={styles.menus} id={open ? styles.show : styles.hide}>
              <HeaderMobileBoard nowPath={nowPath} router={router} />
              <HeaderBoard nowPath={nowPath} router={router} />
            </ul>
            {token ? (
              <div
                className={styles.tokenIcons}
                id={open ? styles.show : styles.hide}
              >
                <Alarm alarmList={alarmList} getAlarmData={getAlarmData} />
                <MessageAlarm
                  className={styles.message}
                  messageList={messageList}
                  getMessage={getMessage}
                />
                <div className={styles.profileWrap}>
                  {userProflie ? (
                    <img
                      alt="유저 프로필"
                      src={userProflie}
                      className={styles.userProflie}
                      onClick={showProfile}
                    />
                  ) : (
                    <FaUserCircle
                      className={styles.Profile}
                      onClick={showProfile}
                    />
                  )}
                </div>
              </div>
            ) : (
              <div
                className={styles.users}
                id={open ? styles.show : styles.hide}
              >
                <HeaderUser nowPath={nowPath} router={router} />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
