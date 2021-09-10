import Link from 'next/link';
import Header from "../Common/Header";
import styles from "../../styles/Board/Board/Board.module.scss";
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

function Notice({ type, getPosts }) {
  const router = useRouter();
  const [page, setPage] = useState();
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    if (!router.isReady) return;
    setPage(Number(router.query.page) || 1);
  }, [router]);

  useEffect(() => {
    getPosts().then((response) => {
      setPosts(response.boards);
    });
  }, [getPosts]);

  const setPageToUrl = (nextPage) => {
    router.push({
      pathname: router.pathname,
      query: {
        page: nextPage
      }
    });
  }
  const title = (
    (type === 'notice') ? '공지 게시판' :
    (type === 'free') ? '자유 게시판' :
    undefined
  );

  if (!page) return null;
  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <h1>{title}</h1>
        <hr />
        <div className={styles.orderBy}>
          <Link href="/write" passHref><button>✏️ 글쓰기</button></Link>
          <select>
            <option>날짜순</option>
            <option>조회수순</option>
          </select>
        </div>
        <Table posts={posts} page={page} />
        <Pagination posts={posts} page={page} setPage={setPageToUrl} />
        <Search />
      </div>
    </div>
  );
}

export default Notice;
