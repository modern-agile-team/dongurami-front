import axios from 'axios';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import PostContainer from 'components/Post/PostContainer';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getToken from 'utils/getToken';
import Head from 'next/head';

class Api {
  constructor(pid) {
    this.pid = pid;
    this.token = getToken();
  }

  async getPost() {
    const response = await axios.get(
      `http://3.36.72.145:8080/api/board/free/${this.pid}`
    );
    return response.data;
  }
  async deletePost() {
    await axios.delete(`http://3.36.72.145:8080/api/board/free/${this.pid}`, {
      headers: {
        'x-auth-token': this.token
      }
    });
  }
  async postComment(description, cid, pcid) {
    if (cid !== pcid) {
      await this.postReplyComment(...arguments);
    } else {
      await axios.post(
        `http://3.36.72.145:8080/api/board/free/${this.pid}`,
        {
          id: 'test1',
          description
        },
        {
          headers: {
            'x-auth-token': this.token
          }
        }
      );
    }
  }
  async putComment(description, cid, pcid) {
    if (cid !== pcid) {
      await this.putReplyComment(...arguments);
    } else {
      await axios.put(
        `http://3.36.72.145:8080/api/board/free/${this.pid}/${cid}`,
        {
          description
        },
        {
          headers: {
            'x-auth-token': this.token
          }
        }
      );
    }
  }
  async deleteComment(cid, pcid) {
    if (cid !== pcid) {
      await this.deleteReplyComment(...arguments);
    } else {
      await axios.delete(
        `http://3.36.72.145:8080/api/board/free/${this.pid}/${cid}`,
        {
          headers: {
            'x-auth-token': this.token
          }
        }
      );
    }
  }

  async postReplyComment(description, pcid) {
    await axios.post(
      `http://3.36.72.145:8080/api/board/free/${this.pid}/${pcid}`,
      {
        id: 'test1',
        description
      },
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
  }
  async putReplyComment(description, cid, pcid) {
    await axios.put(
      `http://3.36.72.145:8080/api/board/free/${this.pid}/${pcid}/${cid}`,
      {
        description
      },
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
  }
  async deleteReplyComment(cid, pcid) {
    await axios.delete(
      `http://3.36.72.145:8080/api/board/free/${this.pid}/${pcid}/${cid}`,
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
  }
}

function FreePost() {
  const [pid, setPid] = useState();
  const router = useRouter();

  const api = new Api(pid);

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);

  if (!pid) return null;

  return (
    <>
      <Head>
        <title>동그라미 | 자유 게시판</title>
      </Head>
      <Header />
      <PostContainer category="free" api={api} />
      <Footer />
    </>
  );
}

export default FreePost;
