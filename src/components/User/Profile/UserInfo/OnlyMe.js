import Link from 'next/link';
import styles from 'styles/Profile/UserInfo.module.scss';

const OnlyMe = ({ clubNo, setLeaveIsOpen, leaveIsOpen, logout, id }) => {
  return (
    <div className={styles.onlyMe}>
      {clubNo !== 0 && (
        <span onClick={() => setLeaveIsOpen(!leaveIsOpen)}>동아리탈퇴</span>
      )}
      <Link
        className={styles.linkClub}
        href={{
          pathname: `/modifyinfo/${id}`
        }}
        passHref
      >
        <span>개인정보수정</span>
      </Link>
      <span onClick={() => logout()}>로그아웃</span>
    </div>
  );
};

export default OnlyMe;
