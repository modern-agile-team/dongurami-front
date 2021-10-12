import Link from 'next/link';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import styles from '../../styles/Board/Board/Board.module.scss';
import { getBoardPosts } from 'redux/slices/board';

function getQuery(router) {
  return {
    page: Number(router.query.page) || 1,
    sort: router.query.sort ?? 'inDate',
    order: router.query.order ?? 'DESC',
    type: router.query.type,
    keyword: router.query.keyword
  };
}

function Board({ category }) {
  const router = useRouter();
  const posts = useSelector((state) => state.board.posts);
  const dispatch = useDispatch();

  const { page, sort, order, type, keyword } = getQuery(router);

  useEffect(() => {
    if (!sort || !order) return;
    if (!router.isReady) return;
    dispatch(getBoardPosts({ category, sort, order, type, keyword }))
  }, [router, category, sort, order, type, keyword, dispatch]);

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
    const value = e.target.value.split(' ');
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: 1,
        sort: value[0],
        order: value[1]
      }
    });
  };

  const title = {
    notice: '공지 게시판',
    free: '자유 게시판',
    clubNotice: '동아리 공지 게시판'
  };

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href={router.pathname} passHref>
          <h1>
            <a>{title[category]}</a>
          </h1>
        </Link>
        <hr />
        <div className={styles.orderBy}>
          <Link href={{ pathname: `${router.pathname}/write`, query: router.query }} passHref>
            <button>✏️ 글쓰기</button>
          </Link>
          <select value={`${sort} ${order}`} onChange={onOrderChange}>
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
