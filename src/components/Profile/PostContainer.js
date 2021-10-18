import Post from '../Post/Post';
import { useRouter } from 'next/router';
import { getBPost, getSPost } from 'apis/profile';
import { useEffect, useState } from 'react';

const PostContainer = () => {
  const [post, setPost] = useState();
  const router = useRouter();
  const data = router.query;

  const getBoardPost = () => {
    getBPost(data.pid, data.clubNum, data.boardNum)
      .then((res) => setPost(res.data.board))
      .catch((err) => console.log(err.response));
  }

  const getScrapPost = () => {
    getSPost(data.pid, data.clubNum, data.boardNum)
    .then(res => {
      setPost(res.data.scrap)
      console.log(post)
    })
    .catch(err => console.log(err));
  }

  const scrapData = () => {
    return {
      ...post,
      description:  post.description + `<br />` + post.scrapDescription
    };
  }

  useEffect(() => {
    if (!router.isReady) return;
    data.no === 'board' ? getBoardPost() : getScrapPost()
  }, [router]);

  if(!post?.description) return null;

  return <Post category="personal" post={post.scrapDescription === undefined ? post : scrapData()} />;
};

export default PostContainer;