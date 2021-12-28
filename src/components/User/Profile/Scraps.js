import styles from 'styles/Profile/Scraps.module.scss';
import { AiOutlineFileText } from 'react-icons/ai';
import Link from 'next/dist/client/link';
import { useEffect, useMemo } from 'react';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

function Scraps({
  profile,
  userInfo,
  getScraps,
  setDataArr,
  dataArr,
  id,
  clubNo,
  setClubNo,
  matchTitle
}) {
  useEffect(() => {
    if (profile.id && clubNo) {
      getScraps(profile.id, clubNo)
        .then((res) => {
          setDataArr(
            res.data.scraps
              .concat(res.data.boards)
              .sort((a, b) => Date.parse(b.inDate) - Date.parse(a.inDate))
          );
        })
        .catch((err) => alert(err.response.data.msg));
    }
  }, [clubNo, getScraps, profile.id, setDataArr]);

  const clubs = useMemo(() => {
    if (Object.keys(profile).length > 0) {
      return profile.clubs.map((club, index) => {
        return (
          <option value={club.no} key={index}>
            {club.name}
          </option>
        );
      });
    }
    return [];
  }, [profile]);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <div className={styles.header}>
            {profile.id === userInfo.id && (
              <Link
                href={{
                  pathname: `/profile/${id}/${clubNo}/writescraps`
                }}
              >
                <DonguramiOutlineButton>✏️글작성</DonguramiOutlineButton>
              </Link>
            )}
            <select
              onChange={(e) => {
                setClubNo(e.target.value);
                getScraps(profile.id, e.target.value)
                  .then((res) => {
                    setDataArr(
                      res.data.scraps
                        .concat(res.data.boards)
                        .sort(
                          (a, b) => Date.parse(b.inDate) - Date.parse(a.inDate)
                        )
                    );
                  })
                  .catch((err) => alert(err.reponse.data.msg));
              }}
            >
              {clubs.length && clubs.map((el) => el)}
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
                  {post.imgPath === '' || post.imgPath === null ? (
                    <AiOutlineFileText className={styles.baseImg} />
                  ) : (
                    <img
                      className={styles.thumbnail}
                      src={post.imgPath}
                      alt="thumbnail"
                    />
                  )}
                  <br />
                  <span className={styles.itemTitle}>
                    {matchTitle(post.title, 5, 6, 8)}
                  </span>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Scraps;
