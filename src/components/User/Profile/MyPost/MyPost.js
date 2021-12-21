import { useEffect } from 'react';
import { getMyPosts } from 'apis/profile';
import styles from 'styles/Profile/MyPost.module.scss';
import MyItems from './MyItems';

const MyPost = ({
  matchTitle,
  router,
  myPosts,
  setMyPosts,
  myComments,
  setMyComments,
  category,
  setCategory,
  isHave,
  setIsHave,
  boardArr,
  movePageFromMyItem
}) => {
  useEffect(() => {
    if (!router.isReady) return;
    getMyPosts(router.query.pid)
      .then((res) => {
        if (res.data.msg.length < 18) {
          res.data.comments.length + res.data.boards.length > 0 &&
            setIsHave(true);
          setMyPosts(res.data.boards);
          setMyComments(res.data.comments);
        }
      })
      .catch((err) => alert(err.response.data.msg));
  }, [router]);

  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <div className={styles.header}>
            <select
              onChange={(e) => {
                setCategory(e.target.value);
              }}
            >
              {boardArr.map((board, idx) => {
                return (
                  <option key={idx} value={idx}>
                    {board}
                  </option>
                );
              })}
            </select>
          </div>
        </div>
        {!isHave ? (
          <div className={styles.spanDiv}>
            <span className={styles.noPost}>작성한 게시물이 없습니다.</span>
          </div>
        ) : (
          <MyItems
            boardArr={boardArr}
            category={category}
            myPosts={myPosts}
            myComments={myComments}
            matchTitle={matchTitle}
            movePageFromMyItem={movePageFromMyItem}
          />
        )}
      </div>
    </div>
  );
};
export default MyPost;
