import styles from 'styles/Profile/MyPost.module.scss';

const MyItems = ({
  boardArr,
  category,
  myPosts,
  myComments,
  matchTitle,
  movePageFromMyItem
}) => {
  if (!myPosts) return null;
  if (!myComments) return null;

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
                  onClick={() => movePageFromMyItem(post)}
                  key={index}
                >
                  <div className={styles.under}>
                    <span>
                      {boardArr[post.boardCategoryNum]}) 글 제목 :{' '}
                      {matchTitle(post.title, 7, 15, 25)}
                    </span>
                    <span className={styles.date}>{post.inDate}</span>
                  </div>
                </div>
              ) : (
                post.boardCategoryNum == category && (
                  <div
                    className={styles.item}
                    onClick={() => movePageFromMyItem(post)}
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
                  onClick={() => movePageFromMyItem(comment)}
                  key={index}
                >
                  <span>
                    {boardArr[comment.boardCategoryNum]}) 글 제목 :{' '}
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
                    onClick={() => movePageFromMyItem(comment)}
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
