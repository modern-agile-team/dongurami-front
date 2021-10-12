import axios from "axios";
import Header from "components/Common/Header/Header";
import getToken from "utils/getToken";
import Write from "../../components/Write/Write";

class Api {
  constructor(router) {
    this.router = router;
    this.token = getToken();
  }

  async post(title, description) {
    await axios.post(`http://3.36.72.145:8080/api/board/notice`, {
      id: 'test1',
      clubNo: '1',
      title, description
    }, {
      headers: {
        'x-auth-token': this.token
      }
    });
    this.router.back();
    return;
  }
}

function write() {
  return (
    <>
      <Header />
      <Write category="notice" />
    </>
  );
}

export default write;
