import styles from 'styles/Profile/MyPost.module.scss';

const MyItems = ({
  boardArr,
  category,
  myPosts,
  myComments,
  router,
  matchTitle
}) => {
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
              return category == 0 ? (
                <div
                  className={styles.item}
                  onClick={() => movePage(post)}
                  key={index}
                >
                  <div className={styles.under}>
                    <span>
                      {boardArr[post.boardCategoryNum - 1]}) 글 제목 :{' '}
                      {matchTitle(post.title, 7, 15, 25)}
                    </span>
                    <span className={styles.date}>{post.inDate}</span>
                  </div>
                </div>
              ) : (
                post.boardCategoryNum == category && (
                  <div
                    className={styles.item}
                    onClick={() => movePage(post)}
                    key={index}
                  >
                    <div className={styles.under}>
                      <span>글 제목 : {matchTitle(post.title, 7, 15, 25)}</span>
                      <span className={styles.date}>{post.inDate}</span>
                    </div>
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
              return category == 0 ? (
                <div
                  className={styles.item}
                  onClick={() => movePage(comment)}
                  key={index}
                >
                  <span>
                    {boardArr[comment.boardCategoryNum - 1]}) 글 제목 :{' '}
                    {matchTitle(comment.title, 7, 15, 25)}
                  </span>
                  <div className={styles.under}>
                    <span>
                      내 댓글 : {matchTitle(comment.description, 7, 15, 25)}
                    </span>
                    <span className={styles.date}>{comment.inDate}</span>
                  </div>
                </div>
              ) : (
                comment.boardCategoryNum == category && (
                  <div
                    className={styles.item}
                    onClick={() => movePage(comment)}
                    key={index}
                  >
                    <span>
                      글 제목 : {matchTitle(comment.title, 7, 15, 25)}
                    </span>
                    <div className={styles.under}>
                      <span>
                        내 댓글 : {matchTitle(comment.description, 7, 15, 25)}
                      </span>
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
