import { GrPrevious, GrNext } from 'react-icons/gr';
import styles from "../../styles/Board/Board/Pagination.module.scss";

function Pagination({ page, setPage }) {
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
        <button onClick={() => { (page < 10) && setPage(page + 1) }}>
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

  if (page < 5) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        <Item itemPage={1} />
        <Item itemPage={2} />
        <Item itemPage={3} />
        <Item itemPage={4} />
        <Item itemPage={5} />
        <Collapse />
        <Item itemPage={10} />
        <NextPage />
      </ul>
    )
  } else if (page >= 5 && page <= 6) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        <Item itemPage={1} />
        <Collapse />
        <Item itemPage={page - 1} />
        <Item itemPage={page} />
        <Item itemPage={page + 1} />
        <Collapse />
        <Item itemPage={10} />
        <NextPage />
      </ul>
    )
  } else if (page > 6) {
    return (
      <ul className={styles.pagination}>
        <PreviousPage />
        <Item itemPage={1} />
        <Collapse />
        <Item itemPage={6} />
        <Item itemPage={7} />
        <Item itemPage={8} />
        <Item itemPage={9} />
        <Item itemPage={10} />
        <NextPage />
      </ul>
    );
  }
}

export default Pagination;
