import Board from "../../components/Board/Board";
import Footer from "../../components/Common/Footer";
import axios from 'axios';
import Header from "components/Common/Header";

const getPosts = async (order, { search, searchBy }) => {
  if (search && searchBy) {
    const response = await axios
      .get(`http://3.36.72.145:8080/api/search/notice/${searchBy}/${search}`);
    return response.data.searchByKeywordResults;
  }
  const response = await axios.get(`http://3.36.72.145:8080/api/board/notice/${order.split(' ').join('/')}`);
  return response.data.boards;
}

function Notice() {
  return (
    <>
      <Header />
      <Board category="notice" getPosts={getPosts} />
      <Footer />
    </>
  );
}

export default Notice;
