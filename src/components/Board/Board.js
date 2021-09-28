import Link from "next/link";
import Header from "../Common/Header/Header";
import styles from "../../styles/Board/Board/Board.module.scss";
import Table from "./Table";
import Pagination from "./Pagination";
import Search from "./Search";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

function Notice({ category, getPosts }) {
  const router = useRouter();
  const [posts, setPosts] = useState([]);
  const [page, setPage] = useState();
  const [order, setOrder] = useState();

  useEffect(() => {
    if (!router.isReady) return;
    setPage(Number(router.query.page) || 1);
    setOrder(router.query.order || "inDate DESC");
  }, [router]);
  useEffect(() => {
    if (!order) return;
    getPosts(order).then((response) => setPosts(response.data.boards));
  }, [order, getPosts]);

  const setPageToUrl = (nextPage) => {
    router.push({
      pathname: router.pathname,
      query: {
        page: nextPage,
        order,
      },
    });
  };
  const onOrderChange = (e) => {
    router.push({
      pathname: router.pathname,
      query: {
        page: 1,
        order: e.target.value,
      },
    });
  };
  const title =
    category === "notice"
      ? "공지 게시판"
      : category === "free"
      ? "자유 게시판"
      : undefined;

  if (!page) return null;
  if (!posts) return null;
  if (!order) return null;

  return (
    <div className={styles.container}>
      <Header />
      <div className={styles.innerContainer}>
        <h1>{title}</h1>
        <hr />
        <div className={styles.orderBy}>
          <Link href={`/${category}/write`} passHref>
            <button>✏️ 글쓰기</button>
          </Link>
          <select value={order} onChange={onOrderChange}>
            <option value="inDate DESC">최근순</option>
            <option value="inDate ASC">오래된순</option>
            <option value="hit DESC">조회수순</option>
          </select>
        </div>
        <Table posts={posts} page={page} category={category} />
        <Pagination posts={posts} page={page} setPage={setPageToUrl} />
        <Search category={category} />
      </div>
    </div>
  );
}

export default Notice;
