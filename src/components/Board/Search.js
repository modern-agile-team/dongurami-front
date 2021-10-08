import styles from "../../styles/Board/Board/Search.module.scss";
import { BsSearch } from 'react-icons/bs';
import { useRouter } from "next/router";
import { useState } from 'react';

function NoticeSearch() {
  const router = useRouter();
  const [type, setType] = useState('title');
  const [keyword, setKeyword] = useState('');

  const onTypeChange = (e) => {
    setType(e.target.value);
  };
  const onKeywordChange = (e) => {
    setKeyword(e.target.value);
  };

  const onClick = () => {
    if (keyword === '') return;
    router.push({
      pathname: router.pathname,
      query: { type, keyword, ...router.query }
    });
  };

  return (
    <div className={styles.container}>
      <select value={type} onChange={onTypeChange}>
        <option value="title">제목</option>
        <option value="name">작성자</option>
      </select>
      <input value={keyword} onChange={onKeywordChange} />
      <button onClick={onClick}><BsSearch /></button>
    </div>
  );
}

export default NoticeSearch;
