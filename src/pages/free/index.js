import Footer from "components/Common/Footer";
import Header from "../../components/Common/Header/Header";
import Board from "../../components/Board/Board";

function free() {
  return (
    <>
      <Header />
      <Board category="free" />
      <Footer />
    </>
  );
}

export default free;
