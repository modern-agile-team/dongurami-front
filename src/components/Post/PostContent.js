import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Post/PostContent.module.scss';
import CommentContainer from '../Common/Comment/CommentContainer';

function PostContent({ category }) {
  const router = useRouter();
  const [pid, setPid] = useState();
  const [post, setPost] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);
  useEffect(() => {
    if (!pid) return;
    fetch(`http://3.36.72.145:8080/api/board/${category}`)
      .then((response) => response.json())
      .then((data) => setPost(data));
  }, [category, pid]);

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
      <div dangerouslySetInnerHTML={{ __html: post.board.description }}></div>
      <CommentContainer comments={post.comments} />
    </div>
  );
}

export default PostContent;
