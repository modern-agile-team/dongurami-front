import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer";
import Board from "components/Board/Board";

function search() {
  return (
    <>
      <Header />
      <Board
        category="free"
        baseAPI="http://3.36.72.145:8080/api/board/wholeFree"
      />
      <Footer />
    </>
  );
}

export default search;
