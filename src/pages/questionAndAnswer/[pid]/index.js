import Footer from "components/Common/Footer";
import Header from "components/Common/Header/Header";
import PostContainer from "components/Post/PostContainer";

function NoticePost() {
  return (
    <>
      <Header />
      <PostContainer category="questionAndAnswer" />
      <Footer />
    </>
  );
}

export default NoticePost;
