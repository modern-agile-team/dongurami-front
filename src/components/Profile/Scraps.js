import styles from '../../styles/Profile/Scraps.module.scss';
import { BsFileText, BsPlusCircle } from 'react-icons/bs';
import Link from 'next/dist/client/link';

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
  if (comp === '스크랩') {
    return (
      <div className={styles.wrap}>
        <div>
          {profile.id === userInfo.id ? (
            <Link
              href={{
                pathname: `/profile/${id}/${clubNo}/writescraps`
              }}
            >
              <BsPlusCircle />
            </Link>
          ) : null}
          <select
            onChange={(e) => {
              setClubNo(e.target.value);
              getScraps(profile.id, e.target.value).then((res) => {
                setDataArr(
                  res.data.scraps
                    .concat(res.data.boards)
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
              <Link
                key={index}
                href={
                  post.scrapNo === undefined ? {
                  pathname: `/profile/${id}/${clubNo}/${post.boardNo}`,
                  query: {no: 'board'}
                } : {
                  pathname: `/profile/${id}/${clubNo}/${post.scrapNo}`,
                  query: {no: 'scrap'}
                }}
              >
                <div>
                  {post.imgPath === null ? (
                    <BsFileText className={styles.thumbnail} />
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
    );
  }
  return null;
}

export default Scraps;
