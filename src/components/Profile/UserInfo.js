import react from 'react';
import router from 'next/router';
import styles from '../../styles/Profile/UserInfo.module.scss';
import { FaGraduationCap, FaUserCircle } from 'react-icons/fa';
import Link from 'next/link';

const UserInfo = ({ logout, comp, setComp, baseImg, userInfo, profile }) => {
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
            <span>{profile.major}</span>
            <span>{profile.grade}학년</span>
          </div>
          <p>소속 동아리</p>
          {/* {profile.clubs.map((club, index) => {
            return (
              <Link href={`/${club.no}/clubhome`} key={index}>
                {club.title}
              </Link>
            );
          })} */}
          {userInfo.id === profile.id ? (
            <div>
              <Link href="/modifyinfo">
                <span>개인정보 수정</span>
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
