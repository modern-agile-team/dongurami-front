import Header from "../../components/Common/Header/Header";
import Footer from "../../components/Common/Footer";
import Board from "components/Board/Board";

function search() {
  return (
    <>
      <Header />
      <Board category="questionAndAnswer" />
      <Footer />
    </>
  );
}

export default search;
