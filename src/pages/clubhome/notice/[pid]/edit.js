import axios from "axios";
import Edit from "components/Write/Edit";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import getToken from "utils/getToken";

class Api {
  constructor(postNo) {
    this.token = getToken();
    this.postNo = postNo;
  }

  async getPost() {
    const response = await axios.get(`http://3.36.72.145:8080/api/club/board/clubNotice/1/${this.postNo}`, {
      headers: {
        "x-auth-token": this.token
      }
    });
    return response.data.board;
  }
  async putPost(title, description) {
    await axios.put(`http://3.36.72.145:8080/api/club/board/clubNotice/1/${this.postNo}`, {
      title, description
    }, {
      headers: {
        "x-auth-token": this.token
      }
    });
    return;
  }
}

function EditNoticePost() {
  const router = useRouter();
  const [no, setNo] = useState();

  const api = new Api(no);

  useEffect(() => {
    if (!router.isReady) return;
    setNo(router.query.pid);
  }, [router]);

  if (!no) return null;

  return <Edit api={api} />;
}

export default EditNoticePost;
