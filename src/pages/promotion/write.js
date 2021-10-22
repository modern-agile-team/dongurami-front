import axios from 'axios';
import Header from 'components/Common/Header/Header';
import Write from 'components/Write/Write';
import getToken from 'utils/getToken';

class Api {
  constructor(router) {
    this.router = router;
    this.token = getToken();
  }

  async post(title, description) {
    await axios.post(
      `http://3.37.220.237:8080/api/board/promotion`,
      {
        id: 'test1',
        clubNo: '1',
        title,
        description
      },
      {
        headers: {
          'x-auth-token': this.token
        }
      }
    );
    this.router.back();
    return;
  }
}

function write() {
  return (
    <>
      <Header />
      <Write category="promotion" Api={Api} />
    </>
  );
}

export default write;
