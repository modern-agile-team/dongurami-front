import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import Header from '../Common/Header/Header';
import TypeSearch from './TypeSearch';

import Modal from './Modal';
import Promotion from './Promotion';

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

  let isLoading = false;
  let itemNo = 0;

  const getDatas = async () => {
    try {
      isLoading = true;
      if (searchItem !== 'whole' && searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;
          console.log(response);

          itemNo = result[result.length - 1].no;

          if (result.length) {
            setBoardData((prev) => prev.concat(result));
          }
        });
      } else if (search) {
        await getSearchData(type, searchKeyword, itemNo).then((response) => {
          const result = response.data.boards;
          console.log(response);

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

          if (result.length === 0) {
            window.removeEventListener('scroll', infiniteScroll);
          } else if (result.length) {
            if (result.length < 8) {
              window.removeEventListener('scroll', infiniteScroll);
            }
            itemNo = result[result.length - 1].no;
            setBoardData((prev) => prev.concat(result));
          }
        });
      }
    } catch (e) {
      console.log(e);
    }
    isLoading = false;
  };

  const firstGetDatas = async () => {
    itemNo = 0;
    try {
      isLoading = true;
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
    isLoading = false;
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
    const { documentElement } = document;
    const scrollHeight = documentElement.scrollHeight;
    const scrollTop = documentElement.scrollTop;
    const clientHeight = documentElement.clientHeight;
    if (scrollTop + clientHeight + 200 >= scrollHeight && isLoading === false) {
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
    document.body.style.overflow = openModal ? 'hidden' : 'auto';
  }, [openModal]);

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
          {boarddata.map((el) => {
            return (
              <div className={styles.poster} key={el.no}>
                <Promotion
                  pId={el.no}
                  date={el.inDate}
                  clubName={el.clubName}
                  name={el.studentName}
                  img={el.url}
                  clubNo={el.clubNo}
                  category={el.category}
                  title={el.title}
                  setOpenModal={setOpenModal}
                  setPostId={setPostId}
                />
              </div>
            );
          })}
        </div>
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} postId={postId} />}
    </>
  );
};

export default PromotionContainer;
