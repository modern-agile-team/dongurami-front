import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import Header from '../Common/Header/Header';
import TypeSearch from './TypeSearch';

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
      if (searchItem !== 'whole' && searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;

          itemNo = result[result.length - 1].no;

          if (result.length) {
            setBoardData((prev) => prev.concat(result));
          }
        });
      } else if (search) {
        await getSearchData(type, searchKeyword, itemNo).then((response) => {
          const result = response.data.boards;
          console.log(result);

          itemNo = result[result.length - 1].no;

          if (result.length) {
            setBoardData((prev) => prev.concat(result));
          }
        });
      } else if (
        searchItem === 'whole' ||
        (search === false && searchItem === '')
      ) {
        await getBoardData(itemNo).then((response) => {
          const result = response.data.boards;
          itemNo = result[result.length - 1].no;
          console.log(result);

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
      if (searchItem !== 'whole' && searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;
          if (result.length) itemNo = result[result.length - 1].no;

          setBoardData(result);
        });
      } else if (search) {
        await getSearchData(type, searchKeyword, itemNo).then((response) => {
          const result = response.data.boards;
          console.log(result);
          if (result.length) itemNo = result[result.length - 1].no;
          setBoardData(result);
        });
      } else if (
        searchItem === 'whole' ||
        (search === false && searchItem === '')
      ) {
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

  const categorySearch = (event) => {
    setSearch(false);
    setSearchKeyword('');
    setSearchItem(event.target.getAttribute('name'));
  };

  const infiniteScroll = () => {
    const scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    const scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );

    const WINDOW_HEIGHT = window.innerHeight;
    let clientHeight = document.documentElement.clientHeight;
    console.log(scrollTop, clientHeight, scrollHeight);

    if (scrollTop + WINDOW_HEIGHT >= scrollHeight) {
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
        categorySearch={categorySearch}
      />
      <div className={styles.sectionWrap}>
        <div className={styles.section}>
          {boarddata.map((el) => (
            <div className={styles.poster} key={el.no}>
              <Promotion
                pId={el.no}
                date={el.inDate}
                clubName={el.clubName}
                name={el.studentName}
                img={el.url}
                category={el.category}
                setOpenModal={setOpenModal}
                setPostId={setPostId}
              />
            </div>
          ))}
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} postId={postId} />}
    </>
  );
};

export default PromotionContainer;
