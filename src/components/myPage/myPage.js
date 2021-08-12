import styles from './myPage.module.sass';
import { ImUser } from 'react-icons/im';
import Router from 'next/router';

const MyPage = ({ open, close }) => {
  const movePage = () => {
    document.location.href = "/ClubHome"
  }

  const moveInfo = () => {
    Router.push('/modifyInfo')
  }

  return (
    <div>
      {open ? (
        <div className={styles.wrap}>
          <ImUser className={styles.icon} />
          <h4>심서현</h4>
          <p>컴퓨터전자공학과</p>
          <ul>
            소속 동아리<br/>
            <li><span onClick={movePage}>우아한 애자일</span></li>
          </ul>
          <a onClick={moveInfo}>개인정보 수정</a>
          <button onClick={close}>X</button>
        </div>
      ) : null}
    </div>
  )
}

export default MyPage;