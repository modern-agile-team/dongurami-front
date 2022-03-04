import styles from 'styles/Profile/UserInfo.module.scss';

const LeaveModal = ({
  setLeaveIsOpen,
  leaveIsOpen,
  setIsOpen,
  profile,
  onClickQuitClubSpan
}) => {
  if (leaveIsOpen) {
    setIsOpen(false);
    return (
      <div className={styles.leaveModal}>
        {profile.clubs.map((club, index) => {
          return (
            <span
              key={index}
              onClick={() => onClickQuitClubSpan(club.name, club.no)}
            >
              {club.name}
            </span>
          );
        })}
        <button onClick={() => setLeaveIsOpen(false)}>취소</button>
      </div>
    );
  }
  return null;
};

export default LeaveModal;
