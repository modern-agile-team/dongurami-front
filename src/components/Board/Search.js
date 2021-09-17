import styles from "../../styles/Board/Board/Search.module.scss";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import Link from 'next/link';

function NoticeSearch({ category }) {
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <div className={styles.container}>
      <select>
        <option>제목</option>
        <option>내용</option>
        <option>댓글</option>
      </select>
      <input value={value} onChange={onChange} />
      <Link href={`/${category}/search?q=${value}`} passHref><button><BsSearch /></button></Link>
    </div>
  );
}

export default NoticeSearch;
