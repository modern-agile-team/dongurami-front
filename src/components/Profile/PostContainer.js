import Post from '../Post/Post';
import { useRouter } from 'next/router';
import { getPost } from 'apis/profile';
import { useEffect, useState } from 'react';

const PostContainer = () => {
  const [post, setPost] = useState({});
  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    getPost(data.pid, data.clubNum, data.boardNum)
      .then((res) => setPost(res.data.board))
      .catch((err) => {
        console.log(err.response);
      });
  }, []);

  return <Post category="personal" post={post} />;
};

export default PostContainer;
