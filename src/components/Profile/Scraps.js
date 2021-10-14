import styles from '../../styles/Profile/Scraps.module.scss';
import { BsFileText, BsPlusCircle } from 'react-icons/bs';

function Scraps({
  moveWriteScraps,
  comp,
  profile,
  getScraps,
  setDataArr,
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
                setDataArr(
                  res.data.scraps
                    .concat(res.data.board)
                    .sort((a, b) => Date.parse(b.inDate) - Date.parse(a.inDate))
                );
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
