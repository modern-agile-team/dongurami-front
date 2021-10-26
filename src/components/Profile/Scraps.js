import styles from '../../styles/Profile/Scraps.module.scss';
import { AiOutlineFileText } from 'react-icons/ai';
import Link from 'next/dist/client/link';
import { useEffect } from 'react';

function Scraps({
  comp,
  profile,
  userInfo,
  getScraps,
  setDataArr,
  dataArr,
  id,
  clubNo,
  setClubNo
}) {
  useEffect(() => {
    getScraps(profile.id, clubNo).then((res) => {
      setDataArr(
        res.data.scraps
          .concat(res.data.boards)
          .sort((a, b) => Date.parse(b.inDate) - Date.parse(a.inDate))
      );
    });
  }, []);

  if (comp === '스크랩') {
    return (
      <div className={styles.wrap}>
        <div className={styles.container}>
          <div className={styles.headerBox}>
            <div className={styles.header}>
              {profile.id === userInfo.id ? (
                <Link
                  href={{
                    pathname: `/profile/${id}/${clubNo}/writescraps`
                  }}
                >
                  <span className={styles.addBtn}>✏️글작성</span>
                </Link>
              ) : null}
              <select
                onChange={(e) => {
                  setClubNo(e.target.value);
                  getScraps(profile.id, e.target.value).then((res) => {
                    setDataArr(
                      res.data.scraps
                        .concat(res.data.boards)
                        .sort(
                          (a, b) => Date.parse(b.inDate) - Date.parse(a.inDate)
                        )
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
          </div>
          <div className={styles.postItem}>
            {dataArr.map((post, index) => {
              return (
                <Link
                  key={index}
                  href={
                    post.scrapNo === undefined
                      ? {
                          pathname: `/profile/${id}/${clubNo}/${post.boardNo}`,
                          query: { no: 'board' }
                        }
                      : {
                          pathname: `/profile/${id}/${clubNo}/${post.scrapNo}`,
                          query: { no: 'scrap' }
                        }
                  }
                >
                  <div className={styles.items}>
                    {post.imgPath === null ? (
                      <AiOutlineFileText className={styles.baseImg} />
                    ) : (
                      <img className={styles.thumbnail} src={post.imgPath} />
                    )}
                    <br />
                    <span>{post.title}</span>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    );
  }
  return null;
}

export default Scraps;
