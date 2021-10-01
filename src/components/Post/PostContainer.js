import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import getToken from "utils/getToken";
import Post, { PostComments } from 'components/Post/Post'
import CommentContainer from "components/Common/Comment/CommentContainer";

function PostContainer({ category, Api }) {
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

  if (!post) return null;

  return (
    <Post category={category} post={post} onDelete={onDelete}>
      <CommentContainer comments={post.comments} api={api} />
    </Post>
  );
}


export default PostContainer;
