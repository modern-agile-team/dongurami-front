import Link from 'next/link';
import styles from "../../styles/Board/Board/Board.module.scss";
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import useBoardOrder from 'hooks/useBoardOrder';
import useBoardPage from 'hooks/useBoardPage';
import useBoardSearch from 'hooks/useBoardSearch';

function Board({ category, getPosts }) {
  const router = useRouter();
  const [posts, setPosts] = useState([]);

  const page = useBoardPage(router);
  const order = useBoardOrder(router);
  const search = useBoardSearch(router);

  useEffect(() => {
    (async () => {
      if (!order) return;
      const response = await getPosts(order);
      setPosts(response.data.boards);
    })();
  }, [order, getPosts]);

  const setPageToUrl = (nextPage) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: nextPage
      }
    });
  };
  const onOrderChange = (e) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: 1,
        order: e.target.value
      }
    });
  }

  const title = { notice: '공지 게시판', free: '자유 게시판' }

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>{title[category]}</h1>
        <hr />
        <div className={styles.orderBy}>
          <Link href={`/${category}/write`} passHref><button>✏️ 글쓰기</button></Link>
          <select value={order} onChange={onOrderChange}>
            <option value="inDate DESC">최근순</option>
            <option value="inDate ASC">오래된순</option>
            <option value="hit DESC">조회수순</option>
          </select>
        </div>
        <Table posts={posts} page={page} category={category} />
        <Pagination posts={posts} page={page} setPage={setPageToUrl} />
        <Search />
      </div>
    </div>
  );
}

export default Board;
