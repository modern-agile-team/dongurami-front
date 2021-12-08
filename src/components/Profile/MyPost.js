import { useEffect, useState } from 'react';
import { getMyPosts } from 'apis/profile';
import styles from 'styles/Profile/MyPost.module.scss';
import { useRouter } from 'next/router';
import MyItems from './MyItems';

const MyPost = ({ matchTitle }) => {
  const [myPosts, setMyPosts] = useState();
  const [myComments, setMyComments] = useState();
  const [category, setCategory] = useState(1);
  const [isHave, setIsHave] = useState(false);
  const router = useRouter();

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
              <option value={1}>공지게시판</option>
              <option value={2}>자유게시판</option>
              <option value={3}>QnA게시판</option>
              <option value={4}>홍보게시판</option>
              <option value={5}>동아리공지게시판</option>
              <option value={6}>동아리활동내용</option>
            </select>
          </div>
        </div>
        {!isHave ? (
          <div className={styles.spanDiv}>
            <span className={styles.noPost}>작성한 게시물이 없습니다.</span>
          </div>
        ) : (
          <MyItems
            category={category}
            myPosts={myPosts}
            myComments={myComments}
            router={router}
            matchTitle={matchTitle}
          />
        )}
      </div>
    </div>
  );
};
export default MyPost;
