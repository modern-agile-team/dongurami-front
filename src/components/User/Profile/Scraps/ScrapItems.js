import Link from 'next/dist/client/link';
import { AiOutlineFileText } from 'react-icons/ai';
import styles from 'styles/Profile/Scraps.module.scss';

const ScrapItems = ({ post, index, id, clubNo, matchTitle }) => {
  return (
    <Link
      key={index}
      href={
        post.scrapNum === undefined
          ? {
              pathname: `/profile/${id}/${clubNo}/${post.boardNum}`,
              query: { no: 'board' }
            }
          : {
              pathname: `/profile/${id}/${clubNo}/${post.scrapNum}`,
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
};

export default ScrapItems;
