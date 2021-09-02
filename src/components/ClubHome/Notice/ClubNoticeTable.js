import styles from "../../../styles/Club/Home/Notice/ClubNoticeTable.module.scss";
import Link from "next/link";

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
          <Link href="/post" key={i} passHref>
            <tr>
              <td>{i + 1}</td>
              <td>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</td>
              <td>21-08-27</td>
              <td>관리자 관리자</td>
              <td>9999999</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
}

export default NoticeTable;
