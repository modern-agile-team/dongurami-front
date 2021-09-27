import axios from "axios";
import Board from 'components/Board/Board';
import styles from 'styles/Club/Home/Notice/ClubNotice.module.scss';

const getPosts = async (order) => {
  const response = await axios.get(`http://3.36.72.145:8080/api/board/notice/${order.split(' ').join('/')}`);
  return response;
}

function ClubNotice() {
  return (
    <div className={styles.container}>
      <Board category="notice" getPosts={getPosts} />
    </div>
  );
}

export default ClubNotice;
