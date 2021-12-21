import styles from 'styles/Club/Home/Intro/LeaderInfo.module.scss';
import Option from 'components/Common/letter/Option';
import SendMessage from 'components/User/Message/SendMessage';

const LeaderInfo = ({
  infos,
  openOptions,
  setOpenOptions,
  openMessage,
  setOpenMessage
}) => {
  return (
    <div className={styles.leaderInfo}>
      {!infos.profileImageUrl ? (
        <img
          onClick={() => setOpenOptions(!openOptions)}
          alt={infos.name}
          src="https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg"
        />
      ) : (
        <img
          onClick={() => setOpenOptions(!openOptions)}
          alt={infos.name}
          src={infos.profileImageUrl}
        />
      )}
      {openOptions && (
        <Option
          setOpenOptions={setOpenOptions}
          setOpenMessage={setOpenMessage}
          routePath={`/profile/${infos.id}`}
        />
      )}
      {openMessage && (
        <SendMessage show={openMessage} onClose={() => setOpenMessage(false)} />
      )}
      <span>{infos.name}</span>
    </div>
  );
};

export default LeaderInfo;
