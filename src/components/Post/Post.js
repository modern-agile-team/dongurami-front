import Footer from "../Common/Footer";
import Header from "../Common/Header/Header";
import PostContent from "./PostContent";

function Posts(props) {
  return (
    <>
      <Header />
      <PostContent {...props} />
      <Footer />
    </>
  );
}

export default Posts;
