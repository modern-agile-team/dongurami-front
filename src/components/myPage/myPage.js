import styles from '../../styles/User/MyPage/myPage.module.scss';
import Router from 'next/router'; 
import { FiSettings, FiUser } from 'react-icons/fi'
import { ImCancelCircle } from 'react-icons/Im'

const MyPage = ({ open, close }) => {
  const movePage = () => {
    document.location.href = "/ClubHome"
  }

  const moveInfo = () => {
    Router.push('/modifyInfo')
  }

  return (
    <>
      {open ? (
        <div className={styles.container}>
          <div className={styles.myHeader}>
            <FiSettings className={styles.setting} onClick={moveInfo} />
            <FiUser className={styles.user} />
            <ImCancelCircle className={styles.cancel} onClick={close}/>
          </div>
          <div className={styles.wrap}>
            <h4>심서현</h4>
            <hr />
            <p>학과</p>
            <p>컴퓨터전자공학과</p>
            <p>소속 동아리</p><br/>
            <span onClick={movePage}>우아한 애자일</span>
          </div>
        </div>
      ) : null}
    </>
  )
}

export default MyPage;