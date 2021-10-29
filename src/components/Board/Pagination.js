import { GrPrevious, GrNext } from 'react-icons/gr';
import styles from "../../styles/Board/Board/Pagination.module.scss";

function Pagination({ posts, page, setPage }) {
  const lastPage = Math.ceil(posts.length / 10);

  const Item = ({ itemPage }) => {
    return (
      <li>
        <button onClick={() => { setPage(itemPage) }} className={(page === itemPage) ? styles.selected : ''}>
          {itemPage}
        </button>
      </li>
    );
  };
  const NextPage = () => {
    return (
      <li>
        <button onClick={() => { (page < lastPage) && setPage(page + 1) }}>
          <GrNext />
        </button>
      </li>
    );
  };
  const PreviousPage = () => {
    return (
      <li>
        <button onClick={() => { (page > 1) && setPage(page - 1) }}>
          <GrPrevious />
        </button>
      </li>
    );
  };
  const Collapse = () => {
    return (
      <li>
        <button className={styles.collapse}>...</button>
      </li>
    );
  };

  if (lastPage < 8) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        {Array.from(new Array(lastPage), (_, i) => <Item key={i} itemPage={i + 1} />)}
        <NextPage />
      </ul>
    )
  } else if (page < 5) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        <Item itemPage={1} />
        <Item itemPage={2} />
        <Item itemPage={3} />
        <Item itemPage={4} />
        <Item itemPage={5} />
        <Collapse />
        <Item itemPage={lastPage} />
        <NextPage />
      </ul>
    )
  } else if (page >= 5 && page <= lastPage - 4) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        <Item itemPage={1} />
        <Collapse />
        <Item itemPage={page - 1} />
        <Item itemPage={page} />
        <Item itemPage={page + 1} />
        <Collapse />
        <Item itemPage={lastPage} />
        <NextPage />
      </ul>
    )
  } else if (page > lastPage - 4) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        <Item itemPage={1} />
        <Collapse />
        <Item itemPage={lastPage - 4} />
        <Item itemPage={lastPage - 3} />
        <Item itemPage={lastPage - 2} />
        <Item itemPage={lastPage - 1} />
        <Item itemPage={lastPage} />
        <NextPage />
      </ul>
    );
  }
}

export default Pagination;
