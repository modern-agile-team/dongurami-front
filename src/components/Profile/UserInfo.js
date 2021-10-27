import styles from '../../styles/Profile/UserInfo.module.scss';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import ClubModal from './ClubModal';
import { useRouter } from 'next/router';

const UserInfo = ({
  isOpen,
  setIsOpen,
  logout,
  comp,
  baseImg,
  userInfo,
  profile
}) => {
  if (comp === '프로필')
    return (
      <div className={styles.wrap}>
        <div className={styles.profileBody}>
          <img
            className={styles.profileImg}
            src={profile.profileImageUrl ?? baseImg}
            alt="profileImg"
          />
          <div className={styles.bottom}>
            <div className={styles.name}>
              <FaUserCircle className={styles.icon} />
              <span> {profile.name}</span>
            </div>
            <div className={styles.major}>
              <FaGraduationCap className={styles.icon} />
              <span> {profile.major}</span>
            </div>
            <button
              className={styles.clubBtn}
              onClick={() => setIsOpen(!isOpen)}
            >
              소속 동아리
            </button>
            <ClubModal isOpen={isOpen} profile={profile} />

            {userInfo.id === profile.id ? (
              <div className={styles.onlyMe}>
                <Link
                  className={styles.linkClub}
                  href={{
                    pathname: `/modifyinfo/${userInfo.id}`
                  }}
                >
                  개인정보 수정
                </Link>
                <span onClick={() => logout()}>로그아웃</span>
              </div>
            ) : null}
          </div>
        </div>
      </div>
    );
  return null;
};

export default UserInfo;
