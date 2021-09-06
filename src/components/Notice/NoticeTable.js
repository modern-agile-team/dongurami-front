import Link from "next/link";
import styles from "../../styles/Board/Notice/NoticeTable.module.scss";

function NoticeTable() {
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
        {Array.from({ length: 9 }, (_, i) => (
          <tr key={i}>
            <td>{i + 1}</td>
            <td>
              <Link href="/post" key={i} passHref>
                <a>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</a>
              </Link>
            </td>
            <td>21-08-27</td>
            <td>관리자 관리자</td>
            <td>9999999</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default NoticeTable;
