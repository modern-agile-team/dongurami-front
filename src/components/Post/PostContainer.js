import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Post from 'components/Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';

function PostContainer({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post)
  const [pid, setPid] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);
  useEffect(() => {
    if (!pid) return;
    dispatch(getPost({ category, pid }));
  }, [category, pid, dispatch]);

  if (!post.description) return null;

  return (
    <Post category={category} post={post} />
  );
}


export default PostContainer;
