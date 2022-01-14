import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/router';
import { useDispatch, useSelector } from 'react-redux';
import Table from './Table/Table';
import Pagination from './Pagination/Pagination';
import Search from './Search';
import OrderBy from './BoardHeader/OrderBy';
import HeaderBtn from './BoardHeader/HeaderBtn';
import styles from 'styles/Board/Board/Board.module.scss';
import { getBoardPosts } from 'redux/slices/board';

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
  const thName = ['번호', '제목', '작성자', '작성일', '조회수', '좋아요'];

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
  const onOrderChange = useCallback(
    (e) => {
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
    },
    [router]
  );

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

  const postsByPage = posts.slice(10 * (page - 1), 10 * page);

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div className={styles.innerContainer}>
        <HeaderBtn router={router} title={title[category]} />
        <hr />
        <OrderBy
          canWrite={canWrite}
          router={router}
          sort={sort}
          order={order}
          onOrderChange={onOrderChange}
        />
        <Table
          posts={posts}
          page={page}
          category={category}
          router={router}
          postsByPage={postsByPage}
          thName={thName}
        />
        <Pagination lastPage={lastPage} page={page} setPage={setPageToUrl} />
        <Search router={router} />
      </div>
    </div>
  );
}

export default Board;
