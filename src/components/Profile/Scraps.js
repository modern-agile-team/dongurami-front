import styles from '../../styles/Profile/Scraps.module.scss';
import { BsFileText, BsPlusCircle } from 'react-icons/bs';
import { useEffect } from 'react';

function Scraps({
  moveWriteScraps,
  comp,
  profile,
  scrapData,
  boardData,
  clubNo,
  setClubNo,
  getScraps,
  setBoardData,
  setScrapData,
  dataArr
}) {
  if (comp === '스크랩') {
    return (
      <div className={styles.wrap}>
        <div>
          <BsPlusCircle onClick={() => moveWriteScraps()} />
          <select
            onChange={(e) => {
              getScraps(profile.id, e.target.value).then((res) => {
                setScrapData(res.data.scraps);
                setBoardData(res.data.board);
              });
            }}
          >
            {profile.clubs.map((club, index) => {
              return (
                <option value={club.no} key={index}>
                  {club.name}
                </option>
              );
            })}
          </select>
        </div>
        <div className={styles.postItem}>
          {dataArr.map((post, index) => {
            return (
              <div key={index}>
                {post.imgPath === null ? (
                  <BsFileText className={styles.thumbnail} />
                ) : (
                  <img className={styles.thumbnail} src={post.imgPath} />
                )}
                <br />
                <span>{post.title}</span>
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
