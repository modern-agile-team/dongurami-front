import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Post/PostContent.module.scss';
import CommentContainer from '../Common/Comment/CommentContainer';
import Link from 'next/link';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(import("react-quill"), {
  ssr: false,
});

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
    axios.get(`http://3.36.72.145:8080/api/board/${category}/${pid}`)
      .then((response) => setPost(response.data));
  }, [category, pid]);

  const title = (
    (category === 'notice') ? '공지 게시판' :
    (category === 'free') ? '자유 게시판' :
    undefined
  );
  const onDelete = () => {
    axios.delete(`http://3.36.72.145:8080/api/board/${category}/${pid}`)
      .then(() => router.push(`/${category}`));
  };

  if (!post) return null;

  console.log(post);

  return (
    <div className={styles.container}>
      <div>
      <Link href={`/${category}`} passHref><a>{title}</a></Link>
        <h1>{post.board.title}</h1>
        <div>
          <div>{post.board.name}</div>
          <div>
            <Link href={`/${category}/${pid}/edit`} passHref><button>수정하기</button></Link>
            <button onClick={onDelete}>삭제하기</button>
            <div>{post.board.inDate}</div>
            <div>조회 {post.board.hit}</div>
          </div>
        </div>
      </div>
      <hr />
      {/* <div dangerouslySetInnerHTML={{ __html: post.board.description }}></div> */}
      <ReactQuill value={post.board.description} readOnly={true} theme={'bubble'} />
      <CommentContainer comments={post.comments} />
    </div>
  );
}

export default PostContent;
