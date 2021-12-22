import styles from 'styles/Profile/Scraps.module.scss';
import Link from 'next/dist/client/link';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

const ScrapHeader = ({ id, clubNo, selectClub, joinedClubs }) => {
  return (
    <div className={styles.header}>
      <Link
        href={{
          pathname: `/profile/${id}/${clubNo}/writescraps`
        }}
      >
        <DonguramiOutlineButton>✏️글작성</DonguramiOutlineButton>
      </Link>
      <select
        onChange={(e) => {
          selectClub(e);
        }}
      >
        {joinedClubs.length && joinedClubs.map((el) => el)}
      </select>
    </div>
  );
};

export default ScrapHeader;
