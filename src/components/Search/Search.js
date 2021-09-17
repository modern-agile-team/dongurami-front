import styles from 'styles/Board/Search/Search.module.scss';
import SearchInput from 'components/Board/Search';

function Search() {
  return (
    <div className={styles.container}>
      <SearchInput />
    </div>
  );
}

export default Search;
