import styles from 'styles/Board/Board/Pagination.module.scss';
import PageNum from './PageNum';

function Pagination({ lastPage, page, setPage }) {
  return (
    <ul className={styles.pagination}>
      <PageNum lastPage={lastPage} page={page} setPage={setPage} />
    </ul>
  );
}

export default Pagination;
