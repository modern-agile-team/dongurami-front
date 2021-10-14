import CommentContainer from 'components/Common/Comment/CommentContainer';
import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Board/Post/PostContent.module.scss';
import api from 'apis/post';
import { useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { setCategory } from 'redux/slices/post';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

function Post({ category, post, optionalOnDelete, optionalEditHref }) {
  const router = useRouter();
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(setCategory(category));
  }, [category, dispatch]);

  const title =
    category === 'notice'
      ? '공지 게시판'
      : category === 'free'
      ? '자유 게시판'
      : category === 'personal'
      ? '활동내용'
      : undefined;

  const onDelete =
    optionalOnDelete ||
    (async () => {
      await api.deletePost(category, post.no);
      router.back();
    });

  const editHref = optionalEditHref || {
    pathname: `${router.pathname}/edit`,
    query: router.query
  };

  return (
    <div className={styles.container}>
      <div>
        <Link href={`/${category}`} passHref>
          <a>{title}</a>
        </Link>
        <h1>{post.title}</h1>
        <div>
          <div>{post.name}</div>
          <div>
            <Link href={editHref} passHref>
              <button>수정하기</button>
            </Link>
            <button onClick={onDelete}>삭제하기</button>
            <div>{post.inDate}</div>
            <div>조회 {post.hit}</div>
          </div>
        </div>
      </div>
      <hr />
      <ReactQuill value={post.description} theme="bubble" readOnly />
      {post.comments && <CommentContainer comments={post.comments} />}
    </div>
  );
}

export default Post;
