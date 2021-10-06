import styles from '../../styles/Profile/Scraps.module.scss';
import { BsFileText, BsPlusCircle } from 'react-icons/bs';

function Scraps({ moveWriteScraps, getScraps, comp, userInfo, profile }) {
  if (comp === '스크랩') {
    return (
      <div className={styles.wrap}>
        <div>
          <BsPlusCircle onClick={() => moveWriteScraps()} />
          <select>
            {profile.clubs.map((club, index) => {
              return <option key={index}>{club.title}</option>;
            })}
          </select>
        </div>
        <div className={styles.postItem}>
          {scrapData.map((data, index) => {
            return (
              <div key={index}>
                {data.fileUrl === null ? (
                  <BsFileText className={styles.thumbnail} />
                ) : (
                  <img className={styles.thumbnail} src={data.fileUrl} />
                )}
                <br />
                <span>{data.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}

export default Scraps;
