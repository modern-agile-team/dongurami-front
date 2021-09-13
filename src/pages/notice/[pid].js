import Post from "../../components/Post/Post";

async function getNoticePost(pid) {
  const noticePost = await fetch(`http://3.36.72.145:8080/api/board/wholeNotice/${pid}`)
    .then((response) => response.json());
  return noticePost;
}

function NoticePost() {
  return <Post category="notice" getPost={getNoticePost} />
}

export default NoticePost;
