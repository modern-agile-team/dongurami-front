import { useRouter } from "next/router";
import { useCallback, useEffect, useState } from "react";
import Post from 'components/Post/Post'
import CommentContainer from "components/Common/Comment/CommentContainer";
import Link from 'next/link';

function PostContainer({ category, api }) {
  const router = useRouter();
  const [pid, setPid] = useState();
  const [post, setPost] = useState();

  const updatePost = useCallback(() => {
    api.getPost().then((response) => {
      setPost(response);
    });
  }, [api]);

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);
  useEffect(() => {
    if (!pid) return;
    updatePost();
  }, [pid, updatePost]);

  const onDelete = () => {
    (async () => {
      await api.deletePost();
      router.back();
    })();
  }

  if (!post) return null;


  return (
    <Post category={category} post={post} onDelete={onDelete} buttons={(
      <>
        <Link href={{ pathname: `${router.pathname}/edit`, query: router.query }} passHref>
          <button>수정하기</button>
        </Link>
        <button onClick={onDelete}>삭제하기</button>
      </>
    )}>
      <CommentContainer comments={post.comments} api={api} updatePost={updatePost} />
    </Post>
  );
}


export default PostContainer;
