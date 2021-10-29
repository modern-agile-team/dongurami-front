import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header";
import Write from "components/Write/Write";

function write() {
  return (
    <>
      <Header />
      <Write category="clubNotice" />
      <Footer />
    </>
  );
}

export default write;
