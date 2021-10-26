import { useRouter } from "next/router";
import { useEffect } from "react";
import Post from 'components/Post/Post'
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';

function PostContainer({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post)

  useEffect(() => {
    if (!router.isReady) return;
    dispatch(getPost({ category, pid: router.query.pid, clubNum: router.query.id }));
  }, [category, router, dispatch]);

  if (!post?.description) return null;

  return (
    <Post category={category} post={post} />
  );
}


export default PostContainer;
