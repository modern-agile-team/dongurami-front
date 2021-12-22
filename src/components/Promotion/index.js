import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import PromotionContainer from './PromotionContainer';
import moment from 'moment';

import { getData, getBoardData, getSearchData } from 'apis/promotion';

const PromotionPage = () => {
  const [openModal, setOpenModal] = useState(false);
  const [boardData, setBoardData] = useState([]);
  const [searchItem, setSearchItem] = useState('');
  const [searchKeyword, setSearchKeyword] = useState('');
  const [type, setType] = useState('title');
  const [isSearch, setIssearch] = useState(false);
  const [search, setSearch] = useState(false);
  const [letter, setLetter] = useState();
  const [isLoading, setIsLoading] = useState(false);
  const [openMessage, setOpenMessage] = useState(false);
  const router = useRouter();

  let scrollLoading = false;
  let itemNo = 0;

  function displayedAt(createdAt) {
    const time = moment(createdAt);
    const milliSeconds = moment() - time;
    const seconds = milliSeconds / 1000;

    if (seconds < 60) return `방금 전`;
    const minutes = seconds / 60;
    if (minutes < 60) return `${Math.floor(minutes)}분 전`;
    const hours = minutes / 60;
    if (hours < 24) return `${Math.floor(hours)}시간 전`;
    const days = hours / 24;
    if (days < 7) return `${Math.floor(days)}일 전`;
    const weeks = days / 7;
    if (weeks < 5) return `${Math.floor(weeks)}주 전`;
    const months = days / 30;
    if (months < 12) return `${Math.floor(months)}개월 전`;
    const years = days / 365;
    return `${Math.floor(years)}년 전`;
  }

  const getDatas = async () => {
    try {
      scrollLoading = true;
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
    scrollLoading = false;
  };

  const firstGetDatas = async () => {
    itemNo = 0;
    try {
      setIsLoading(true);
      scrollLoading = true;
      if (searchItem !== '전체' && searchItem) {
        await getData(searchItem, itemNo).then((response) => {
          const result = response.data.boards;
          if (result.length) itemNo = result[result.length - 1].no;

          setBoardData(result);
        });
      } else if (search) {
        await getSearchData(type, searchKeyword, itemNo).then((response) => {
          const result = response.data.boards;

          if (result.length) itemNo = result[result.length - 1].no;

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
    setIsLoading(false);
    scrollLoading = false;
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
  };

  const infiniteScroll = () => {
    const { documentElement } = document;
    const scrollHeight = documentElement.scrollHeight;
    const scrollTop = documentElement.scrollTop;
    const clientHeight = documentElement.clientHeight;
    if (
      scrollTop + clientHeight + 200 >= scrollHeight &&
      scrollLoading === false
    ) {
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
    <PromotionContainer
      setSearchItem={setSearchItem}
      setSearchKeyword={setSearchKeyword}
      setType={setType}
      type={type}
      searchKeyword={searchKeyword}
      onSearch={onSearch}
      categorySearch={categorySearch}
      boardData={boardData}
      sendMessage={sendMessage}
      displayedAt={displayedAt}
      isLoading={isLoading}
      letter={letter}
      openModal={openModal}
      openMessage={openMessage}
      setOpenMessage={setOpenMessage}
    />
  );
};

export default PromotionPage;
