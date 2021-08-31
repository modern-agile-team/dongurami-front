import styles from "../../styles/Common/Header.module.scss";
import { useRouter } from "next/router";

function Header() {
  const router = useRouter();

  const nowMenu = id => {
    console.log(id);
  }
  
  return (
    <header>
      <nav>
        <ul className={styles.myHeader}>
          <li onClick={() => {router.push('/')}}>
            <img src='https://lovelyoch.notion.site/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F439c0672-c274-4f90-b273-9928548c4081%2Flogo.jpg?table=block&id=99568f38-6c02-4bbc-b04b-1b7152648016&spaceId=69eb8ea8-3d04-47ec-8bb7-004e8aa31f9e&width=7460&userId=&cache=v2'/>
          </li>
          <li className={styles.dropdown}>게시판
            <ul className={styles.dropdownMenu}>
              <li
              className={styles.notice} 
              onClick={() => {router.push('/notice'); nowMenu(1)}}
              id={nowMenu === 1 ? styles.now : 0} 
              >공지게시판
              </li>
              <li
              className={styles.free} 
              onClick={() => {router.push('/notice'); nowMenu(2)}}
              id={nowMenu === 2 ? styles.now : 0}
              >자유게시판
              </li>
            </ul>
          </li>
          <li 
          onClick={() => {router.push('/clublists'); nowMenu(3)}}
          id={nowMenu === 3 ? styles.now : 0}
          >동아리 목록
          </li>
          <li 
          onClick={() => {router.push('/promotion'); nowMenu(4)}}
          id={nowMenu === 4 ? styles.now : 0}
          >동아리 홍보
          </li>
          <div className={styles.user}>
          <li 
          className={styles.login} 
          onClick={() => {router.push('/LoginPage'); nowMenu(5)}}
          id={nowMenu === 5 ? styles.now : 0}
          >로그인
          </li>
          <li 
          className={styles.signUp} 
          onClick={() => {router.push('/signup'); nowMenu(6)}}
          id={nowMenu === 6 ? styles.now : 0}
          >회원가입
          </li>
          </div>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
