import styles from '../../styles/Profile/UserInfo.module.scss';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';
import { useRouter } from 'next/router';

const UserInfo = ({ logout, comp, baseImg, userInfo, profile }) => {
  if (comp === '프로필')
    return (
      <div>
        <div className={styles.profileBody}>
          <img
            className={styles.profileImg}
            src={profile.profileImageUrl ?? baseImg}
          />
          <hr />
          <div>
            <FaUserCircle />
            <span> {profile.name}</span>
          </div>
          <div>
            <FaGraduationCap />
            <span> {profile.major}</span>
          </div>
          <p>소속 동아리</p>
          {profile.clubs === undefined ? (
            <span>소속된 동아리가 없습니다.</span>
          ) : (
            profile.clubs.map((club, index) => {
              return (
                <Link href={`/clubhome/${club.no}`} key={index}>
                  {club.name}
                </Link>
              );
            })
          )}
          {userInfo.id === profile.id ? (
            <div>
              <Link
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
    );
  return null;
};

export default UserInfo;
