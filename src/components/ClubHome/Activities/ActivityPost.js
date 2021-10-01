import axios from "axios";
import Post from "components/Post/Post";
import { useEffect, useMemo, useState } from "react";
import styles from 'styles/Club/Home/Activities/ActivityPost.module.scss';
import getToken from "utils/getToken";
import Link from 'next/link';

class Api {
  constructor(no, setPost, closeModal, updatePosts) {
    this.no = no;
    this.setPost = setPost;
    this.token = getToken();
    this.closeModal = closeModal
    this.updatePosts = updatePosts
  }

  async updatePost() {
    const post = await this.getPost();
    this.setPost(post);
  }

  async getPost() {
    const response = await axios.get(`http://3.36.72.145:8080/api/club/board/clubActivity/1/${this.no}`, {
      headers: {
        'x-auth-token': this.token
      }
    });
    return response.data;
  }
  async deletePost() {
    await axios.delete(`http://3.36.72.145:8080/api/club/board/clubActivity/1/${this.no}`, {
      headers: {
        'x-auth-token': this.token
      }
    });
    this.closeModal();
    this.updatePosts();
  }
}

function ActivityPost({ no, closeModal, updatePosts }) {
  const [post, setPost] = useState();
  const api = useMemo(() => new Api(no, setPost, closeModal, updatePosts), [no, closeModal, updatePosts]);

  useEffect(() => {
    api.updatePost();
  }, [api]);

  if (!post) return null;

  return (
    <div className={styles.container}>
      <Post post={post} api={api} buttons={(
        <>
          <Link href={`/clubhome/edit-activity?no=${no}`} passHref>
            <button>수정하기</button>
          </Link>
          <button onClick={() => api.deletePost()}>삭제하기</button>
        </>
      )}></Post>
    </div>
  );
}

export default ActivityPost;
