import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import Header from '../Common/Header/Header';
import TypeSearch from './TypeSearch';
import { BsPencil } from 'react-icons/bs';
import Modal from './Modal';
import Promotion from './Promotion';
import Link from 'next/link';
import { getData, getBoardData, getSearchData } from 'apis/promotion';
import test from 'pages/changepassword';

const PromotionContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [postId, setPostId] = useState('');
  const [boarddata, setBoardData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [type, setType] = useState('title');
  const [isSearch, setIssearch] = useState(false);
  const [search, setSearch] = useState(false);
  const [test, setTest] = useState(false);
  const img =
    'https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg';

  let preitem = 0;
  let item = 8;

  const getDatas = async () => {
    try {
      if (searchItem) {
        await getData(searchItem).then((response) => {
          const result = response.data.boards.slice(preitem, item);

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
        await getBoardData().then((response) => {
          const result = response.data.boards.slice(preitem, item);

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
    try {
      if (searchItem) {
        await getData(searchItem).then((response) => {
          preitem = 0;
          item = 8;
          const result = response.data.boards.slice(preitem, item);
          console.log(boarddata, '처음데이터');
          setBoardData(result);
          setTest(true);
        });
      } else if (search) {
        await getSearchData(type, searchKeyword).then((response) => {
          console.log(response);
          preitem = 0;
          item = 8;
          const result = response.data.promotionSearch.slice(preitem, item);
          setBoardData(result);
        });
      } else {
        await getBoardData(searchItem).then((response) => {
          console.log(response, '데이터 첫번째 조회');
          preitem = 0;
          item = 8;
          const result = response.data.boards.slice(preitem, item);
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
    console.log('안녕');
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
      preitem = item;
      item += 8;
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

  useEffect(() => {
    console.log(boarddata, '테스트');
  }, [test]);

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
            img={img}
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
