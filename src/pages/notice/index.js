import Board from "../../components/Board/Board";
import Footer from "../../components/Common/Footer";
import axios from 'axios';

const getPosts = async (order) => {
  const response = await axios.get(`http://3.36.72.145:8080/api/board/notice/${order.split(' ').join('/')}`);
  return response;
}

function Notice() {
  return (
    <>
      <Board category="notice" getPosts={getPosts} />
      <Footer />
    </>
  );
}

export default Notice;
