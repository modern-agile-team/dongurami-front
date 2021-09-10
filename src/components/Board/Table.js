import Link from "next/link";
import styles from "../../styles/Board/Board/Table.module.scss";

function NoticeTable({ posts, page }) {
  const postsByPage = posts.slice(10 * (page - 1), 10 * page);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성일</th>
          <th>작성자</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        {postsByPage.map((post) => (
          <tr key={post.no}>
            <td>{post.no}</td>
            <td>
              <Link href="/post" passHref>
                <a>{post.title}</a>
              </Link>
            </td>
            <td>{post.inDate}</td>
            <td>{post.studentName}</td>
            <td>{post.hit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NoticeTable;
