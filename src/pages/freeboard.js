import Board from "../components/Board/Board";

async function getFreeBoardPosts() {
  const FreeBoardPosts = await fetch('http://3.36.72.145:8080/api/board/wholeFree')
    .then((response) => response.json());
  return FreeBoardPosts;
}

function freeboard() {
  return <Board type="free" getPosts={getFreeBoardPosts} />;
}

export default freeboard;
