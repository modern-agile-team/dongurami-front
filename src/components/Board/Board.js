import Link from "next/link";
import styles from "../../styles/Board/Board/Board.module.scss";
import Table from "./Table";
import Pagination from "./Pagination";
import Search from "./Search";
import { useEffect } from "react";
import { useRouter } from "next/router";
import useBoardOrder from "hooks/useBoardOrder";
import useBoardPage from "hooks/useBoardPage";
import useBoardSearch from "hooks/useBoardSearch";
import { useDispatch, useSelector } from 'react-redux';
import { getBoardPosts } from 'redux/reducers/board';

function Board({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.board.posts);

  const page = useBoardPage(router);
  const order = useBoardOrder(router);
  const { search, searchBy } = useBoardSearch(router);

  useEffect(() => {
    if (!order) return;
    dispatch(getBoardPosts({ order, search, searchBy }));
  }, [order, search, searchBy, dispatch]);

  const setPageToUrl = (nextPage) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: nextPage,
      },
    });
  };
  const onOrderChange = (e) => {
    router.push({
      pathname: router.pathname,
      query: {
        ...router.query,
        page: 1,
        order: e.target.value,
      },
    });
  };

  const title = { notice: "공지 게시판", free: "자유 게시판", clubNotice: "공지 게시판" };

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <Link href={router.pathname} passHref><h1><a>{title[category]}</a></h1></Link>
        <hr />
        <div className={styles.orderBy}>
          {(category === 'clubNotice') ? (
            <Link href={`${router.pathname}/notice/write`} passHref><button>✏️ 글쓰기</button></Link>
          ) : (
            <Link href={`${router.pathname}/write`} passHref><button>✏️ 글쓰기</button></Link>
          )}
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
