import Board from "../../components/Board/Board";
import Footer from "../../components/Common/Footer";

async function getNoticeBoardPosts() {
  const noticeBoardPosts = await fetch('http://3.36.72.145:8080/api/board/wholeNotice')
    .then((response) => response.json());
  return noticeBoardPosts;
}

function notice() {
  return (
    <>
      <Board category="notice" getPosts={getNoticeBoardPosts} />
      <Footer/>
    </>
  );
}

export default notice;
