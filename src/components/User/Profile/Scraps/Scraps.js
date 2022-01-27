import styles from 'styles/Profile/Scraps.module.scss';
import { useEffect } from 'react';
import ScrapHeader from './ScrapHeader';
import ScrapItems from './ScrapItems';

function Scraps({
  profile,
  getScraps,
  setDataArr,
  dataArr,
  id,
  clubNo,
  matchTitle,
  joinedClubs,
  selectClub
}) {
  useEffect(() => {
    if (profile.id && clubNo) {
      getScraps(profile.id, clubNo)
        .then((res) => {
          setDataArr(
            res.data.result.scraps
              .concat(res.data.result.myPagePosts)
              .sort((a, b) => Date.parse(b.inDate) - Date.parse(a.inDate))
          );
        })
        .catch((err) => alert(err.response.data.msg));
    }
  }, [clubNo, getScraps, profile.id, setDataArr]);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <ScrapHeader
            id={id}
            clubNo={clubNo}
            selectClub={selectClub}
            joinedClubs={joinedClubs}
          />
        </div>
        <div className={styles.postItem}>
          {dataArr.map((post, index) => {
            return (
              <ScrapItems
                key={index}
                post={post}
                index={index}
                id={id}
                clubNo={clubNo}
                matchTitle={matchTitle}
              />
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Scraps;
