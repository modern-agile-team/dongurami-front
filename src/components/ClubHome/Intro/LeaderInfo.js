import styles from '../../../styles/Club/Home/Intro/LeaderInfo.module.scss';
import { useState } from 'react';
import Option from 'components/Common/letter/Option';
import SendMessage from 'components/Message/SendMessage';

const LeaderInfo = ({ infos }) => {
  const [openOptions, setOpenOptions] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
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
