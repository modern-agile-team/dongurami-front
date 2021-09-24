import axios from 'axios';
import Board from "../../components/Board/Board";

const getPosts = async (order) => {
  const response = await axios.get(`http://3.36.72.145:8080/api/board/free/${order.split(' ').join('/')}`);
  return response;
}

function free() {
  return <Board category="free" getPosts={getPosts}/>;
}

export default free;
