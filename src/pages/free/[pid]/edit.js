import axios from 'axios';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getToken from 'utils/getToken';
import Edit from '../../../components/Write/Edit';

class Api {
  constructor(pid) {
    this.token = getToken();
    this.pid = pid;
  }

  async getPost() {
    const response = await axios.get(
      `http://3.36.72.145:8080/api/board/free/${this.pid}`
    );
    return response.data.boards;
  }
  async putPost(title, description) {
    await axios.put(
      `http://3.36.72.145:8080/api/board/free/${this.pid}`,
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

  return <Edit category="free" api={api} />;
}

export default Write;
