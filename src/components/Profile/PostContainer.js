import Post from './Post';
import { useRouter } from 'next/router';
import { getBPost, getSPost, deleteBPost, deleteSPost } from 'apis/profile';
import { useCallback, useEffect, useState } from 'react';

const PostContainer = () => {
  const [post, setPost] = useState();
  const router = useRouter();
  const data = router.query;
  const queryData = [data.pid, data.clubNum, data.boardNum];

  const getBoardPost = async () => {
    await getBPost(...queryData)
      .then((res) => setPost(res.data.board))
      .catch((err) => alert(err.response.data.msg));
  };

  const getScrapPost = async () => {
    await getSPost(...queryData)
      .then((res) => {
        setPost(res.data.scrap);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const scrapData = () => {
    return {
      ...post,
      description: post.scrapDescription + `<br />` + post.boardDescription
    };
  };

  const onDelete = () => {
    if (data.no === 'board') deleteBPost(...queryData);
    else deleteSPost(...queryData);
    router.back();
  };

  const editLink = {
    pathname: `${data.boardNum}/edit`,
    query: data
  };

  useEffect(() => {
    if (!router.isReady) return;
    data.no === 'board' ? getBoardPost() : getScrapPost();
  }, [router, data]);

  if (!post) return null;

  return (
    <Post
      category="personal"
      post={post.boardDescription === undefined ? post : scrapData()}
      onDelete={onDelete}
      editLink={editLink}
    />
  );
};

export default PostContainer;
