import Link from 'next/link';
import Header from "../Common/Header";
import styles from "../../styles/Board/Board/Board.module.scss";
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import { useReducer } from 'react';

function Notice() {
  const [{ page }, dispatchPage] = useReducer((state, action) => {
    switch (action.type) {
      case 'next':
        if (state.page > 9) return state;
        return { page: state.page + 1 };
      case 'previous':
        if (state.page < 2) return state;
        return { page: state.page - 1 };
    }
  }, { page: 1 });

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
        <Pagination page={page} dispatch={dispatchPage} />
        <Search />
      </div>
    </div>
  );
}

export default Notice;
