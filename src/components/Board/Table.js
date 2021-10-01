import Link from "next/link";
import { useRouter } from "next/router";
import styles from "../../styles/Board/Board/Table.module.scss";

function NoticeTable({ posts, page, category }) {
  const router = useRouter();

  const postsByPage = posts.slice(10 * (page - 1), 10 * page);

  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>작성자</th>
          <th>작성일</th>
          <th>조회수</th>
        </tr>
      </thead>
      <tbody>
        {postsByPage.map((post) => (
          <tr key={post.no}>
            <td>{post.no}</td>
            <td>
              {(category === 'clubNotice') ? (
                <Link href={{ pathname: `${router.pathname}/notice/${post.no}` }} passHref>
                  <a>{post.title}</a>
                </Link>
              ) : (
                <Link href={{ pathname: `${router.pathname}/${post.no}` }} passHref>
                  <a>{post.title}</a>
                </Link>
              )}
            </td>
            <td>{post.studentName}</td>
            <td>{post.inDate}</td>
            <td>{post.hit}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NoticeTable;
