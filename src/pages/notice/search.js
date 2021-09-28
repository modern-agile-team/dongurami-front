import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer";
import Board from "components/Board/Board";

function search() {
  return (
    <>
      <Header />
      <Board
        category="notice"
        baseAPI="http://3.36.72.145:8080/api/board/wholeNotice"
      />
      <Footer />
    </>
  );
}

export default search;
