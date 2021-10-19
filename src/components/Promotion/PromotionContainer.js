import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import Header from '../Common/Header/Header';
import TypeSearch from './TypeSearch';
import { BsPencil } from 'react-icons/bs';
import Modal from './Modal';
import Promotion from './Promotion';
import Link from 'next/link';
import { getData, getBoardData, getSearchData } from 'apis/promotion';

const PromotionContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [postId, setPostId] = useState('');
  const [boarddata, setBoardData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [type, setType] = useState('title');
  const [isSearch, setIssearch] = useState(false);
  const [search, setSearch] = useState(false);

  let itemNo = 0;

  const getDatas = async () => {
    try {
      if (searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;
          itemNo = result[result.length - 1].no;

          if (result.length) {
            setBoardData((prev) => prev.concat(result));
          }
        });
      } else if (search) {
        await getSearchData(type, searchKeyword).then((response) => {
          const result = response.data.promotionSearch.slice(preitem, item);

          if (result.length) {
            setBoardData((prev) => prev.concat(result));
          }
        });
      } else {
        await getBoardData(itemNo).then((response) => {
          const result = response.data.boards;
          itemNo = result[result.length - 1].no;

          if (result.length) {
            setBoardData((prev) => prev.concat(result));
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const firstGetDatas = async () => {
    itemNo = 0;
    try {
      if (searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;
          itemNo = result[result.length - 1].no;
          setBoardData(result);
        });
      } else if (search) {
        await getSearchData(type, searchKeyword).then((response) => {
          const result = response.data.promotionSearch.slice(preitem, item);
          setBoardData(result);
        });
      } else {
        await getBoardData(itemNo).then((response) => {
          console.log(response);
          const result = response.data.boards;
          itemNo = result[result.length - 1].no;
          setBoardData(result);
        });
      }
    } catch (e) {
      console.log(e);
    }
  };

  const onSearch = () => {
    setIssearch(!isSearch);
    setSearch(true);
    setSearchItem('');
  };

  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      getDatas();
    }
  };

  useEffect(() => {
    firstGetDatas();
    window.addEventListener('scroll', infiniteScroll);
    return () => {
      window.removeEventListener('scroll', infiniteScroll);
    };
  }, [searchItem, isSearch]);

  console.log(boarddata);

  return (
    <>
      <Header />
      <TypeSearch
        setSearchItem={setSearchItem}
        setSearchKeyword={setSearchKeyword}
        setType={setType}
        type={type}
        searchKeyword={searchKeyword}
        onSearch={onSearch}
      />
      <Link href={`/promotion/write`} passHref>
        <button className={styles.writeBtn}>
          <BsPencil />
          글쓰기
        </button>
      </Link>
      <div className={styles.section}>
        {boarddata.map((el) => (
          <Promotion
            key={el.no}
            pId={el.no}
            date={el.inDate}
            clubName={el.clubName}
            name={el.studentName}
            img={el.url}
            category={el.category}
            setOpenModal={setOpenModal}
            setPostId={setPostId}
          />
        ))}
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} postId={postId} />}
    </>
  );
};

export default PromotionContainer;
