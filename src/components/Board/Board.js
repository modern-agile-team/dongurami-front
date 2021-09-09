import Link from 'next/link';
import Header from "../Common/Header";
import styles from "../../styles/Board/Board/Board.module.scss";
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Notice() {
  const router = useRouter();
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (!router.isReady) return;
    if (!router.query.page) return;
    setPage(Number(router.query.page));
  }, [router]);

  const setPageToUrl = (nextPage) => {
    router.push({
      pathname: router.pathname,
      query: {
        page: nextPage
      }
    });
  }

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <h1>공지 게시판</h1>
        <hr />
        <div className={styles.orderBy}>
          <Link href="/write" passHref><button>✏️ 글쓰기</button></Link>
          <select>
            <option>날짜순</option>
            <option>조회수순</option>
          </select>
        </div>
        <Table />
        <Pagination page={page} setPage={setPageToUrl} />
        <Search />
      </div>
    </div>
  );
}

export default Notice;
