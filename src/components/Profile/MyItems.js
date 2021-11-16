import styles from 'styles/Profile/MyPost.module.scss';

const MyItems = ({ category, myPosts, myComments, router }) => {
  if (!myPosts) return null;
  if (!myComments) return null;

  console.log(category);
  console.log(myPosts);

  const movePage = (el) => {
    if (el.boardCategoryNum === 5)
      router.push(`/clubhome/${el.clubNo}/notice/${el.no}`);
    else if (el.boardCategoryNum === 6)
      router.push(`/clubhome/${el.clubNo}?pid=${el.no}`);
    else if (el.boardCategoryNum === 4) router.push(`/promotion?id=${el.no}`);
    else if (el.boardCategoryNum === 3)
      router.push(`/questionAndAnswer/${el.no}`);
    else if (el.boardCategoryNum === 2) router.push(`/free/${el.no}`);
    else if (el.boardCategoryNum === 1) router.push(`/notice/${el.no}`);
  };
  return (
    <div className={styles.body}>
      <div className={styles.itemContainer}>
        <span className={styles.divHead}>작성글</span>
        <hr />
        {myPosts.length !== 0 &&
          myPosts.map((post) => {
            return (
              post.boardCategoryNum == category && (
                <div className={styles.item}>
                  <span onClick={() => movePage(post)}>{post.title}</span>
                  <span>{post.inDate}</span>
                </div>
              )
            );
          })}
      </div>
      <div className={styles.itemContainer}>
        <span className={styles.divHead}>작성댓글</span>
        <hr />
        {myComments.length !== 0 &&
          myComments.map((comment) => {
            return (
              comment.boardCategoryNum == category && (
                <div className={styles.item}>
                  <span onClick={() => movePage(comment)}>{comment.title}</span>
                  <span>내 댓글 : {comment.description}</span>
                  <span>{comment.inDate}</span>
                </div>
              )
            );
          })}
      </div>
    </div>
  );
};

export default MyItems;
