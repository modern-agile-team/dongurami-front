import axios from 'axios';
import Edit from 'components/Write/Edit';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getToken from 'utils/getToken';

class Api {
  constructor(postNo) {
    this.token = getToken();
    this.postNo = postNo;
  }

  async getPost() {
    const response = await axios.get(
      `http://3.36.72.145:8080/api/club/board/promotion/${this.postNo}`,
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
    return response.data.board;
  }
  async putPost(title, description) {
    await axios.put(
      `http://3.36.72.145:8080/api/club/board/promotion/${this.postNo}`,
      {
        title,
        description
      },
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
    return;
  }
}

function Write() {
  const router = useRouter();
  const [pid, setPid] = useState();

  const api = new Api(pid);

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);

  if (!pid) return null;

  return <div>안녕</div>;
}

export default Write;
