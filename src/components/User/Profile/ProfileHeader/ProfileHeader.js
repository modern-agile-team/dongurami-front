import styles from 'styles/Profile/Profile.module.scss';
import HeaderBtns from './HeaderBtns';

const ProfileHeader = ({ userInfo, profile, router, moveComp, compObj }) => {
  return (
    <div className={styles.profileHeader}>
      <HeaderBtns pageName={undefined} router={router} moveComp={moveComp} />

      {userInfo.id === profile.id &&
        Object.keys(compObj).map((comp, idx) => {
          return (
            <HeaderBtns
              key={idx}
              pageName={comp}
              router={router}
              moveComp={moveComp}
              compObj={compObj}
            />
          );
        })}
    </div>
  );
};

export default ProfileHeader;
