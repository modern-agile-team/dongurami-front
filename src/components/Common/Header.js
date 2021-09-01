import styles from "../../styles/Common/Header.module.scss";
import { useRouter } from "next/router";
import { useState } from 'react';

function Header() {
  const router = useRouter();

  const [menu, setMenu] = useState(0);

  return (
    <header>
      <nav>
        <ul className={styles.myHeader}>
          <li>
            <img onClick={() => {router.push('/')}} src='https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F439c0672-c274-4f90-b273-9928548c4081%2Flogo.jpg?table=block&id=99568f38-6c02-4bbc-b04b-1b7152648016&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=7460&userId=&cache=v2'/>
          </li>
          <li className={styles.dropdown}>게시판
            <ul className={styles.dropdownMenu}>
              <li
              className={styles.notice} 
              onClick={() => {router.push('/notice'); setMenu(1)}}
              id={menu === 1 ? styles.now : 0} 
              >공지게시판
              </li>
              <li
              className={styles.free} 
              onClick={() => {router.push('/notice'); setMenu(2)}}
              id={menu === 2 ? styles.now : 0}
              >자유게시판
              </li>
            </ul>
          </li>
          <li 
          onClick={() => {router.push('/clublists'); setMenu(3)}}
          id={menu === 3 ? styles.now : 0}
          >동아리 목록
          </li>
          <li 
          onClick={() => {router.push('/promotion'); setMenu(4)}}
          id={menu === 4 ? styles.now : 0}
          >동아리 홍보
          </li>
          <div className={styles.user}>
          <li 
          className={styles.login} 
          onClick={() => {router.push('/LoginPage'); setMenu(5)}}
          id={menu === 5 ? styles.now : 0}
          >로그인
          </li>
          <li 
          className={styles.signUp} 
          onClick={() => {router.push('/signup'); setMenu(6)}}
          id={menu === 6 ? styles.now : 0}
          >회원가입
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
