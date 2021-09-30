import CommentContainer from 'components/Common/Comment/CommentContainer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useMemo, useState } from 'react';
import getToken from 'utils/getToken';
import styles from '../../styles/Board/Post/PostContent.module.scss';

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function Post({ category, Api }) {
  const router = useRouter();
  const [pid, setPid] = useState();
  const [post, setPost] = useState();

  const token = getToken();
  const api = useMemo(() => new Api(pid, token, setPost, category), [Api, pid, token, category]);

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);
  useEffect(() => {
    if (!pid) return;
    api.updatePost();
  }, [pid, api]);

  const onDelete = () => {
    (async () => {
      await api.deletePost();
      router.push(`/${category}`);
    })();
  }

  const title = (
    (category === 'notice') ? '공지 게시판' :
    (category === 'free') ? '자유 게시판' :
    undefined
  );

  if (!post) return null;

  return (
    <div className={styles.container}>
      <div>
        {(category) && (
          <Link href={`/${category}`} passHref>
            <a>{title}</a>
          </Link>
        )}
        <h1>{post.board.title}</h1>
        <div>
          <div>{post.board.name}</div>
          <div>
            <Link href={`${router.pathname}/edit`} passHref>
              <button>수정하기</button>
            </Link>
            <button onClick={onDelete}>삭제하기</button>
            <div>{post.board.inDate}</div>
            <div>조회 {post.board.hit}</div>
          </div>
        </div>
      </div>
      <hr />
      <ReactQuill value={post.board.description} theme="bubble" readOnly />
      <CommentContainer comments={post.comments} api={api} />
    </div>
  );
}

export default Post;
