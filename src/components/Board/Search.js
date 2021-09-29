import styles from "../../styles/Board/Board/Search.module.scss";
import { BsSearch } from 'react-icons/bs';
import { useRouter } from "next/router";
import useBoardSearch from "hooks/useBoardSearch";

function NoticeSearch() {
  const router = useRouter();
  const { search, searchBy, setSearch, setSearchBy } = useBoardSearch(router);

  const onSearchChange = (e) => {
    setSearch(e.target.value);
  };
  const onSearchByChange = (e) => {
    setSearchBy(e.target.value);
  };

  const onClick = () => {
    if (search === '') return;
    router.push({
      pathname: router.pathname,
      query: {
        search,
        searchBy
      }
    });
  };

  return (
    <div className={styles.container}>
      <select value={searchBy} onChange={onSearchByChange}>
        <option value="title">제목</option>
        <option value="name">작성자</option>
      </select>
      <input value={search} onChange={onSearchChange} />
      <button onClick={onClick}><BsSearch /></button>
    </div>
  );
}

export default NoticeSearch;
