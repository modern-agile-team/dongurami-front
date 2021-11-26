import { useEffect, useState } from 'react';
import styles from '../../styles/Board/Promotion/PromotionContainer.module.scss';
import Header from '../Common/Header/Header';
import TypeSearch from './TypeSearch';
import { useRouter } from 'next/router';

import Modal from './Modal';
import Promotion from './Promotion';
import SendMessage from 'components/Message/SendMessage';

import { getData, getBoardData, getSearchData } from 'apis/promotion';

const PromotionContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const [postId, setPostId] = useState('');
  const [boardData, setBoardData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [type, setType] = useState('title');
  const [isSearch, setIssearch] = useState(false);
  const [search, setSearch] = useState(false);
  const [letter, setLetter] = useState();
  const router = useRouter();

  let isLoading = false;
  let itemNo = 0;

  const getDatas = async () => {
    try {
      isLoading = true;
      if (searchItem !== '전체' && searchItem) {
        await getData(searchItem, itemNo).then((response) => {
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
      } else if (search) {
        await getSearchData(type, searchKeyword, itemNo).then((response) => {
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
      } else if (
        searchItem === '전체' ||
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
    } catch (err) {
      alert(err.response.data.msg);
    }
    isLoading = false;
  };

  const firstGetDatas = async () => {
    itemNo = 0;
    try {
      isLoading = true;
      if (searchItem !== '전체' && searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;
          if (result.length) itemNo = result[result.length - 1].no;
          else {
            alert('게시글이 존재하지 않습니다');
            router.reload();
          }

          setBoardData(result);
        });
      } else if (search) {
        await getSearchData(type, searchKeyword, itemNo).then((response) => {
          const result = response.data.boards;

          if (result.length) itemNo = result[result.length - 1].no;
          else {
            alert('게시글이 존재하지 않습니다');
            router.reload();
          }
          setBoardData(result);
        });
      } else if (
        searchItem === '전체' ||
        (search === false && searchItem === '')
      ) {
        await getBoardData(itemNo).then((response) => {
          if (response.data.success) {
            const result = response.data.boards;
            itemNo = result[result.length - 1].no;
            setBoardData(result);
          }
        });
      }
    } catch (err) {
      alert(err.response.data.msg);
    }
    isLoading = false;
  };

  const onSearch = () => {
    setIssearch(!isSearch);
    setSearch(true);
    setSearchItem('');
  };

  const categorySearch = (el) => {
    setSearch(false);
    setSearchKeyword('');
    setSearchItem(el);
  };

  const sendMessage = (comment) => {
    setLetter(comment);
    setOpenMessage(true);

  }


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
    if (Object.keys(router.query).length > 0) {
      setOpenModal(true);
    } else {
      setOpenModal(false);
    }
  }, [openModal, router]);

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
          {boardData.map((el) => {
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
                  setOpenModal={() => setOpenModal(true)}
                  setPostId={setPostId}
                />
              </div>
            );
          })}
        </div>
      </div>
      {openModal && (
        <Modal postId={postId} sendMessage={sendMessage} />
      )}
      <SendMessage show={openMessage} onClose={() => setOpenMessage(false)} letter={letter} />
    </>
  );
};

export default PromotionContainer;
