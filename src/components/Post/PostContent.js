import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Post/PostContent.module.scss';
import CommentContainer from '../Common/Comment/CommentContainer';

function PostContent({ category, getPost }) {
  const router = useRouter();
  const [pid, setPid] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);
  useEffect(() => {
    if (!pid) return;
    getPost(pid).then((response) => {
      setPost(response);
    });
  }, [pid, getPost]);

  const title = (
    (category === 'notice') ? '공지 게시판' :
    (category === 'free') ? '자유 게시판' :
    undefined
  );

  if (!post) return null;

  return (
    <div className={styles.container}>
      <div>
        <div>{title}</div>
        <div>{post.board.title}</div>
        <div>
          <div>{post.board.name}</div>
          <div>
            <div>{post.board.inDate}</div>
            <div>조회 {post.board.hit}</div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        {post.board.description}
      </div>
      <CommentContainer comments={post.comments} />
    </div>
  );
}

export default PostContent;
