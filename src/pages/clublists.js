import ClubLists from "../components/ClubLists/ClubLists";
import Footer from "../components/Common/Footer";
import Header from "../components/Common/Header";
import TypeSearch from "../components/Promotion/TypeSearch";

function clublists() {
  return (
    <>
      <Header />
      <TypeSearch />
      <ClubLists />
      <Footer/>
    </>
  );
}

export default clublists;
