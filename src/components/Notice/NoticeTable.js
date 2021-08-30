import Link from 'next/link';
import styles from "../../styles/Board/Notice/NoticeTable.module.scss";

function NoticeTable() {
  return (
    <table className={styles.table}>
      <thead>
        <tr>
          <th>번호</th>
          <th>제목</th>
          <th>글쓴이</th>
          <th>날짜</th>
        </tr>
      </thead>
      <tbody>
        {Array.from({ length: 10 }, (_, i) => (
          <Link href="/post" key={i} passHref>
            <tr>
              <td>{i}</td>
              <td>제목입니다</td>
              <td>글쓴2</td>
              <td>15분전</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
}

export default NoticeTable;
