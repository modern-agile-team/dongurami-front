import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useRouter } from 'next/router';
import styles from '../../styles/Board/Post/PostContent.module.scss';

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function Post({ children, category, post, onDelete }) {
  const router = useRouter();

  const title = (
    (category === 'notice') ? '공지 게시판' :
    (category === 'free') ? '자유 게시판' :
    undefined
  );

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
      {children}
    </div>
  );
}

export default Post;
