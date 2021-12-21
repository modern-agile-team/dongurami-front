import styles from 'styles/Profile/UserInfo.module.scss';
import { FiMail } from 'react-icons/fi';
import Link from 'next/link';
import ClubModal from './ClubModal';
import LeaveModal from './LeaveModal';
import OnlyMe from './OnlyMe';
import Immutable from './Immutable';

const UserInfo = ({
  logout,
  baseImg,
  userInfo,
  profile,
  isOpen,
  setIsOpen,
  leaveIsOpen,
  setLeaveIsOpen,
  clubNo,
  onClickQuitClubSpan
}) => {
  return (
    <div className={styles.wrap}>
      <div className={styles.profileBody}>
        <img
          className={styles.profileImg}
          src={profile.profileImageUrl ?? baseImg}
          alt="profileImg"
        />
        <div className={styles.bottom}>
          <Immutable profile={profile} />
          {userInfo.id === profile.id && (
            <div>
              <FiMail className={styles.icon} />
              <Link href={{ pathname: '/message' }} passHref>
                <span className={styles.message}>쪽지함</span>
              </Link>
            </div>
          )}
          <button
            className={styles.clubBtn}
            onClick={() => {
              setIsOpen(!isOpen);
              setLeaveIsOpen(false);
            }}
          >
            소속 동아리
          </button>
          <ClubModal isOpen={isOpen} profile={profile} />
          <LeaveModal
            setIsOpen={setIsOpen}
            setLeaveIsOpen={setLeaveIsOpen}
            leaveIsOpen={leaveIsOpen}
            profile={profile}
            onClickQuitClubSpan={onClickQuitClubSpan}
          />
          {userInfo.id === profile.id && (
            <OnlyMe
              clubNo={clubNo}
              setLeaveIsOpen={setLeaveIsOpen}
              leaveIsOpen={leaveIsOpen}
              logout={logout}
              id={userInfo.id}
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default UserInfo;
