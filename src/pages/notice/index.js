import Board from "../../components/Board/Board";
import Footer from "../../components/Common/Footer";

function notice() {
  return (
    <>
      <Board
        category="notice"
        baseAPI="http://3.36.72.145:8080/api/board/wholeNotice"
      />
      <Footer />
    </>
  );
}

export default notice;
