import moment from 'moment';
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
          <Link key={post.no} href={{
            pathname: (category === 'clubNotice') ?
              `${router.pathname}/notice/${post.no}` : `${router.pathname}/${post.no}`,
            query: router.query
          }} passHref>
            <tr key={post.no}>
              <td>{post.no}</td>
              <td>{post.title}</td>
              <td>{post.studentName}</td>
              <td>{moment(post.inDate).format('YYYY-MM-DD')}</td>
              <td>{post.hit}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
}

export default NoticeTable;
