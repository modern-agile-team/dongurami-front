import axios from 'axios';
import Edit from 'components/Promotion/Edit/Edit';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import getToken from 'utils/getToken';
import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Head from 'next/head';

class Api {
  constructor(postNo) {
    this.token = getToken();
    this.postNo = postNo;
  }

  async getPost() {
    const response = await axios.get(
      `http://3.37.220.237:8080/api/board/promotion/${this.postNo}`,
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
    return response.data;
  }
  async putPost(title, description) {
    await axios.put(
      `http://3.37.220.237:8080/api/board/promotion/${this.postNo}`,
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
    setPid(router.query.id);
  }, [router]);

  if (!pid) return null;

  return (
    <>
      <Head>
        <title>동그라미 | 홍보 게시글 수정</title>
      </Head>
      <Header />
      <Edit pid={pid} />
      <Footer />
    </>
  );
}

export default Write;
