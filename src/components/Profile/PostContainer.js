import Post from './Post';
import { useRouter } from 'next/router';
import { getBPost, getSPost, deleteBPost, deleteSPost } from 'apis/profile';
import { useCallback, useEffect, useState } from 'react';

const PostContainer = () => {
  const [post, setPost] = useState();
  const router = useRouter();
  const data = router.query;

  const getBoardPost = useCallback(() => {
    getBPost(data.pid, data.clubNum, data.boardNum)
      .then((res) => setPost(res.data.board))
      .catch((err) => console.log(err.response));
  }, [data.pid, data.clubNum, data.boardNum]);

  const getScrapPost = useCallback(() => {
    getSPost(data.pid, data.clubNum, data.boardNum)
      .then((res) => {
        setPost(res.data.scrap);
      })
      .catch((err) => console.log(err));
  }, [data.pid, data.clubNum, data.boardNum]);

  const scrapData = () => {
    return {
      ...post,
      description: post.description + `<br />` + post.scrapDescription
    };
  };

  const onDelete = () => {
    if (data.no === 'board') deleteBPost(data.pid, data.clubNum, data.boardNum);
    else deleteSPost(data.pid, data.clubNum, data.boardNum);
    router.back();
  };

  const editLink = {
    pathname: `${data.boardNum}/edit`,
    query: data
  };

  useEffect(() => {
    if (!router.isReady) return;
    data.no === 'board' ? getBoardPost() : getScrapPost();
  }, [router, data.no, getBoardPost, getScrapPost]);

  if (!post?.description) return null;

  return (
    <Post
      category="personal"
      post={post.scrapDescription === undefined ? post : scrapData()}
      onDelete={onDelete}
      editLink={editLink}
    />
  );
};

export default PostContainer;
