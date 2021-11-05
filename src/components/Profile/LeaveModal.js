import styles from '../../styles/Profile/UserInfo.module.scss';
import { quitClub } from 'apis/profile';

const LeaveModal = ({ setLeaveIsOpen, leaveIsOpen, setIsOpen, profile }) => {
  const onClick = (name, number) => {
    if (window.confirm(`정말로 ${name}에서 탈퇴하시겠습니까?`)) {
      quitClub(profile.id, number)
        .then((res) => alert(res))
        .catch((err) => console(err));
      setLeaveIsOpen(!setLeaveIsOpen);
    } else setLeaveIsOpen(false);
  };
  if (leaveIsOpen) {
    setIsOpen(false);
    return (
      <div className={styles.leaveModal}>
        {profile.clubs.map((club, index) => {
          return (
            <span key={index} onClick={() => onClick(club.name, club.no)}>
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
