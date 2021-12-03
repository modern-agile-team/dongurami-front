import styles from 'styles/Profile/MyPost.module.scss';

const MyItems = ({ category, myPosts, myComments, router }) => {
  if (!myPosts) return null;
  if (!myComments) return null;

  const movePage = (el) => {
    switch (el.boardCategoryNum) {
      case 5:
        router.push(`/clubhome/${el.clubNo}/notice/${el.no}`);
        break;
      case 6:
        router.push(`/clubhome/${el.clubNo}?pid=${el.no}`);
        break;
      case 4:
        router.push(`/promotion?id=${el.no}`);
        break;
      case 3:
        router.push(`/questionAndAnswer/${el.no}`);
        break;
      case 2:
        router.push(`/free/${el.no}`);
        break;
      case 1:
        router.push(`/notice/${el.no}`);
        break;
      default:
        break;
    }
  };
  return (
    <div className={styles.body}>
      <div className={styles.halfBody}>
        <div className={styles.divHeader}>
          <span className={styles.divHead}>✏️ 작성글</span>
        </div>
        <div className={styles.itemContainer}>
          {myPosts.length !== 0 &&
            myPosts.map((post, index) => {
              return (
                post.boardCategoryNum == category && (
                  <div
                    className={styles.item}
                    onClick={() => movePage(post)}
                    key={index}
                  >
                    <span>{post.title}</span>
                    <span>{post.inDate}</span>
                  </div>
                )
              );
            })}
        </div>
      </div>
      <div className={styles.halfBody}>
        <div className={styles.divHeader}>
          <span className={styles.divHead}>💬 작성댓글</span>
        </div>
        <div className={styles.itemContainer}>
          {myComments.length !== 0 &&
            myComments.map((comment, index) => {
              return (
                comment.boardCategoryNum == category && (
                  <div
                    className={styles.item}
                    onClick={() => movePage(comment)}
                    key={index}
                  >
                    <span>{comment.title}</span>
                    <div className={styles.under}>
                      <span>내 댓글 : {comment.description}</span>
                      <span className={styles.date}>{comment.inDate}</span>
                    </div>
                  </div>
                )
              );
            })}
        </div>
      </div>
    </div>
  );
};

export default MyItems;
