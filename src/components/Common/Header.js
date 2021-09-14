import styles from "../../styles/Common/Header.module.scss";
import { useRouter } from "next/router";
import { useState, useEffect } from 'react';
import { RiMenuLine } from "react-icons/ri";

function Header() {
  const [open, setOpen] = useState(false);
  const toggle = () => setOpen(!open);

  const router = useRouter();

  const [menu, setMenu] = useState(0);

  const menuToggle = (menu) => {
    setMenu(menu);
  };

  useEffect(() => {
    setMenu(JSON.parse(window.localStorage.getItem('menu')));
  }, []);

  useEffect(() => {
    window.localStorage.setItem('menu', menu);
  }, [menu]);

  return (
    <header>
      <nav>
        <div className={styles.myHeader}>
          <img onClick={() => {router.push('/'); menuToggle(0); window.scrollTo(0,0)}} src='https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F439c0672-c274-4f90-b273-9928548c4081%2Flogo.jpg?table=block&id=99568f38-6c02-4bbc-b04b-1b7152648016&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=7460&userId=&cache=v2'/>
          <RiMenuLine className={styles.icon} onClick={() => toggle()}/>
          <div className={styles.topMenu}>
              <ul className={styles.menus} id={open ? styles.show : styles.hide}>
                <ul className={styles.mobile}>
                      <li
                      className={styles.notice}
                      id={menu === 1 ? styles.now : 0}
                      onClick={() => {router.push('/notice'); menuToggle(1)}}
                      >공지게시판
                      </li>
                      <li
                      className={styles.free}
                      id={menu === 2 ? styles.now : 0}
                      onClick={() => {router.push('/free'); menuToggle(2)}}
                      >자유게시판
                      </li>
                </ul>
                <li className={styles.dropdown}>게시판
                  <ul className={styles.dropdownMenu}>
                    <li
                    className={styles.notice}
                    id={menu === 1 ? styles.now : 0}
                    onClick={() => {router.push('/notice'); menuToggle(1)}}
                    >공지게시판
                    </li>
                    <li
                    className={styles.free}
                    id={menu === 2 ? styles.now : 0}
                    onClick={() => {router.push('/free'); menuToggle(2)}}
                    >자유게시판
                    </li>
                  </ul>
                </li>
                <li
                id={menu === 3 ? styles.now : 0}
                onClick={() => {router.push('/clublists'); menuToggle(3)}}
                >동아리 목록
                </li>
                <li
                id={menu === 4 ? styles.now : 0}
                onClick={() => {router.push('/promotion'); menuToggle(4)}}
                >동아리 홍보
                </li>
              </ul>
              <ul className={styles.user} id={open ? styles.show : styles.hide}>
                <li
                className={styles.login}
                id={menu === 5 ? styles.now : 0}
                onClick={() => {router.push('/LoginPage'); menuToggle(5)}}
                >로그인
                </li>
                <li
                className={styles.signUp}
                id={menu === 6 ? styles.nowSign : 0}
                onClick={() => {router.push('/signup'); menuToggle(6)}}
                >회원가입
                </li>
              </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
