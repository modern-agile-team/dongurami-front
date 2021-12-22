import Link from 'next/link';
import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table';
import Pagination from './Pagination';
import Search from './Search';
import styles from 'styles/Board/Board/Board.module.scss';
import { getBoardPosts } from 'redux/slices/board';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

function getQuery(router) {
  return {
    page: Number(router.query.page) || 1,
    sort: router.query.sort ?? 'inDate',
    order: router.query.order ?? 'DESC',
    type: router.query.type,
    keyword: router.query.keyword,
    clubNum: Number(router.query.id)
  };
}

function Board({ category }) {
  const router = useRouter();
  const posts = useSelector((state) => state.board.posts);
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const { page, sort, order, type, keyword, clubNum } = getQuery(router);

  useEffect(() => {
    if (!sort || !order) return;
    if (!router.isReady) return;
    dispatch(getBoardPosts({ category, sort, order, type, keyword, clubNum }));
  }, [router, category, sort, order, type, keyword, clubNum, dispatch]);

  const lastPage = Math.ceil(posts.length / 10);

  const setPageToUrl = useCallback(
    (nextPage) => {
      router.push({
        pathname: router.pathname,
        query: {
          ...router.query,
          page: nextPage
        }
      });
    },
    [router]
  );
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
    clubNotice: '동아리 공지 게시판',
    questionAndAnswer: 'Q&A 게시판'
  };
  const canWrite = (() => {
    if (!user) return false;
    if (['free', 'questionAndAnswer'].includes(category)) return true;
    if (category === 'notice' && user.isAdmin) return true;
    if (clubNum && user.club.some(({ no }) => no === clubNum)) return true;
    return false;
  })();

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <h1>
          <Link
            href={{
              pathname: router.pathname,
              query: { ...(router.query.id && { id: router.query.id }) }
            }}
            passHref
          >
            <a>{title[category]}</a>
          </Link>
        </h1>
        <hr />
        <div className={styles.orderBy}>
          {canWrite && (
            <Link
              href={{
                pathname: `${router.pathname}/write`,
                query: router.query
              }}
              passHref
            >
              <DonguramiOutlineButton>✏️ 글쓰기</DonguramiOutlineButton>
            </Link>
          )}
          <select value={`${sort} ${order}`} onChange={onOrderChange}>
            <option value="inDate DESC">최근순</option>
            <option value="inDate ASC">오래된순</option>
            <option value="hit DESC">조회수순</option>
          </select>
        </div>
        <Table posts={posts} page={page} category={category} />
        <Pagination lastPage={lastPage} page={page} setPage={setPageToUrl} />
        <Search router={router} />
      </div>
    </div>
  );
}

export default Board;
