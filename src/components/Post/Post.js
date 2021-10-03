import dynamic from 'next/dynamic';
import Link from 'next/link';
import styles from '../../styles/Board/Post/PostContent.module.scss';

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

function Post({ children, category, post, buttons }) {
  const title = (
    (category === 'notice') ? '공지 게시판' :
    (category === 'free') ? '자유 게시판' :
    undefined
  );

  return (
    <div className={styles.container}>
      <div>
        {category && (
          <Link href={`/${category}`} passHref>
            <a>{title}</a>
          </Link>
        )}
        <h1>{post.board.title}</h1>
        <div>
          <div>{post.board.name}</div>
          <div>
            {buttons}
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
