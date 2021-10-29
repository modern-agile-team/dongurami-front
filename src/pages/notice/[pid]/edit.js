import Footer from 'components/Common/Footer';
import Header from 'components/Common/Header/Header';
import Edit from "../../../components/Write/Edit";

function Write() {
  return (
    <>
      <Header />
      <Edit category="notice" />
      <Footer />
    </>
  );
}

export default Write;
