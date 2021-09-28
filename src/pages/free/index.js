import axios from "axios";
import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header";
import Board from "../../components/Board/Board";

const getPosts = async (order) => {
  const response = await axios.get(
    `http://3.36.72.145:8080/api/board/free/${order.split(" ").join("/")}`
  );
  return response;
};

function free() {
  return (
    <>
      <Header />
      <Board category="free" getPosts={getPosts} />
      <Footer />
    </>
  );
}

export default free;
