import axios from "axios";
import Board from 'components/Board/Board';
import styles from 'styles/Club/Home/Notice/ClubNotice.module.scss';
import getToken from "utils/getToken";

const getPosts = async (order, { search, searchBy }) => {
  const token = getToken();
  if (search && searchBy) {
    const response = await axios
      .get(`http://3.36.72.145:8080/api/club/board/clubNotice/1/${searchBy}/${search}/${order.split(' ').join('/')}`, {
        headers: {
          'x-auth-token': token
        }
      });
    return response.data.boards;
  }
  const response = await axios.get(`http://3.36.72.145:8080/api/club/board/clubNotice/1/${order.split(' ').join('/')}`, {
    headers: {
      'x-auth-token': token
    }
  });
  return response.data.boards;
}

function ClubNotice() {
  return (
    <div className={styles.container}>
      <Board category="clubNotice" getPosts={getPosts} />
    </div>
  );
}

export default ClubNotice;
