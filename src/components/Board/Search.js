import styles from "../../styles/Board/Board/Search.module.scss";
import { BsSearch } from 'react-icons/bs';
import { useState } from "react";
import { useRouter } from "next/router";

function NoticeSearch({ category }) {
  const router = useRouter();
  const [value, setValue] = useState('');

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const onClick = () => {
    router.push({
      pathname: router.pathname,
      query: {
        q: value
      }
    });
  };

  return (
    <div className={styles.container}>
      <select>
        <option>제목</option>
        <option>내용</option>
        <option>댓글</option>
      </select>
      <input value={value} onChange={onChange} />
      <button onClick={onClick}><BsSearch /></button>
    </div>
  );
}

export default NoticeSearch;
