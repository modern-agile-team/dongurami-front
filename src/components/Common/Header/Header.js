import styles from '../../../styles/Common/Header/Header.module.scss';
import { useState, useEffect, useRef } from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { BiBell } from 'react-icons/bi';
import Hamburger from 'hamburger-react';
import HeaderBoard from './HeaderBoard';
import HeaderUser from './HeaderUser';
import AlarmContainer from '../Alarm/AlarmContainer';
import HeaderMobileBoard from './HeaderMobileBoard';
import Link from 'next/link';
import getToken from 'utils/getToken';
import { useRouter } from 'next/router';
import { getUserData } from 'apis/user';

function Header() {
  const [open, setOpen] = useState(false);
  const [isAlarmOpen, setIsAlarmOpen] = useState(false);
  const [token, setToken] = useState('');
  const [user, setUser] = useState();

  const closeRef = useRef(null);
  const router = useRouter();

  //영역밖 클릭 시 사이드바 제거
  const CloseSidebar = (ref) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
          setIsAlarmOpen(false);
        }
      }
      document.addEventListener('mousedown', handleClickOutside);
      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
      };
    }, [ref]);
  };
  CloseSidebar(closeRef);

  // localStorage의 JWT값 불러와 token state에 저장
  useEffect(() => {
    setToken(getToken());
  }, []);

  //마이페이지 routing
  const showProfile = () => {
    router.push(`/profile/${user}`);
  };

  //토큰 유효성 검사
  useEffect(() => {
    if (token) {
      getUserData({
        headers: {
          'Content-type': 'application/json; charset=utf-8',
          'x-auth-token': token
        }
      })
        .then((res) => {
          setUser(res.data.user.id);
        })
        .catch((err) => {
          window.localStorage.removeItem('jwt');
          window.location.reload();
        });
    }
  }, [token]);

  //알람 열람
  const alarmOpen = () => {
    setIsAlarmOpen(!isAlarmOpen);
  };

  return (
    <header className={styles.container}>
      <nav>
        <div className={styles.myHeader} ref={closeRef}>
          <Link href="/" passHref>
            <img src="https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F439c0672-c274-4f90-b273-9928548c4081%2Flogo.jpg?table=block&id=99568f38-6c02-4bbc-b04b-1b7152648016&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=7460&userId=&cache=v2" />
          </Link>
          <Hamburger rounded toggled={open} toggle={setOpen} size={25} />
          <div className={styles.topMenu}>
            <ul className={styles.menus} id={open ? styles.show : styles.hide}>
              <HeaderMobileBoard />
              <HeaderBoard />
            </ul>
            {token ? (
              <div
                className={styles.tokenIcons}
                id={open ? styles.show : styles.hide}
              >
                <div className={styles.alarm}>
                  <BiBell onClick={alarmOpen} className={styles.bell} />
                  {isAlarmOpen && <AlarmContainer />}
                </div>
                <FaUserCircle
                  className={styles.Profile}
                  onClick={showProfile}
                />
              </div>
            ) : (
              <div
                className={styles.users}
                id={open ? styles.show : styles.hide}
              >
                <HeaderUser />
              </div>
            )}
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
