import Link from "next/dist/client/link";
import styles from '../../styles/Profile/UserInfo.module.scss';

const ClubModal = ({ isOpen, profile }) => {
  if (isOpen) {
    return (
      <div className={styles.clubList}>
        {profile.clubs.length === 0 ? (
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
      </div>
    )
  }
  return null
}

export default ClubModal;
