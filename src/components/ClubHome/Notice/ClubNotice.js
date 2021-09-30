import axios from "axios";
import Board from 'components/Board/Board';
import styles from 'styles/Club/Home/Notice/ClubNotice.module.scss';

const getPosts = async (order, { search, searchBy }) => {
  if (search && searchBy) {
    const response = await axios
      .get(`http://3.36.72.145:8080/api/search/notice/${searchBy}/${search}/${order.split(' ').join('/')}`);
    return response.data.boards;
  }
  const response = await axios.get(`http://3.36.72.145:8080/api/board/notice/${order.split(' ').join('/')}`);
  return response.data.boards;
}

function ClubNotice() {
  return (
    <div className={styles.container}>
      <Board category="notice" getPosts={getPosts} />
    </div>
  );
}

export default ClubNotice;
