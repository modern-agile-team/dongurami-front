import styles from "../../styles/Board/Board/Search.module.scss";
import { BsSearch } from 'react-icons/bs';
import { useRouter } from "next/router";
import { useState } from 'react';
import { useEffect } from 'react';

function NoticeSearch() {
  const router = useRouter();
  const [keyword, setKeyword] = useState('');
  const [type, setType] = useState('title');

  const onTypeChange = (e) => {
    setType(e.target.value);
  };
  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (keyword === '') return;
    router.push({
      pathname: router.pathname,
      query: { ...router.query, page: 1, type, keyword }
    });
  };

  useEffect(() => {
    setKeyword(router.query.keyword ?? '');
    setType(router.query.type ?? 'title');
  }, [router, setKeyword]);

  return (
    <div className={styles.container}>
      <select value={type} onChange={onTypeChange}>
        <option value="title">제목</option>
        <option value="name">작성자</option>
      </select>
      <form onSubmit={onSubmit}>
        <input value={keyword} onChange={onKeywordChange} />
        <button type="submit"><BsSearch color="black" /></button>
      </form>
    </div>
  );
}

export default NoticeSearch;
