import axios from "axios";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header";
import Write from "components/Write/Write";
import getToken from "utils/getToken";

class Api {
  constructor(router) {
    this.router = router;
    this.token = getToken();
  }

  async post(title, description) {
    await axios.post(`http://3.36.72.145:8080/api/club/board/clubNotice/1`, {
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
      <Write Api={Api} />
      <Footer />
    </>
  );
}

export default write;
