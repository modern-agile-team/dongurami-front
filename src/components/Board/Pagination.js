import { GrPrevious, GrNext } from 'react-icons/gr';
import styles from "../../styles/Board/Board/Pagination.module.scss";

function NoticePagination({ page, dispatch }) {
  const nextPage = () => { dispatch({ type: 'next' }) };
  const previousPage = () => { dispatch({ type: 'previous' }); };

  if (page < 5) {
    return (
      <ul className={styles.pagination}>
        <li><button onClick={previousPage}><GrPrevious /></button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 1 }) }} className={(page === 1) ? styles.selected : ''}>1</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 2 }) }} className={(page === 2) ? styles.selected : ''}>2</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 3 }) }} className={(page === 3) ? styles.selected : ''}>3</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 4 }) }} className={(page === 4) ? styles.selected : ''}>4</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 5 }) }} className={(page === 5) ? styles.selected : ''}>5</button></li>
        <li><button className={styles.collapse}>...</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 10 }) }}>10</button></li>
        <li><button onClick={nextPage}><GrNext /></button></li>
      </ul>
    )
  } else if (page >= 5 && page <= 6) {
    return (
      <ul className={styles.pagination}>
        <li><button onClick={previousPage}><GrPrevious /></button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 1 }) }}>1</button></li>
        <li><button className={styles.collapse}>...</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: page - 1 }) }}>{page - 1}</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: page }) }} className={styles.selected}>{page}</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: page + 1 }) }}>{page + 1}</button></li>
        <li><button className={styles.collapse}>...</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 10 }) }}>10</button></li>
        <li><button onClick={nextPage}><GrNext /></button></li>
      </ul>
    )
  } else if (page > 6) {
    return (
      <ul className={styles.pagination}>
        <li><button onClick={previousPage}><GrPrevious /></button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 1 }) }}>1</button></li>
        <li><button className={styles.collapse}>...</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 6 }) }} className={(page === 6) ? styles.selected : ''}>6</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 7 }) }} className={(page === 7) ? styles.selected : ''}>7</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 8 }) }} className={(page === 8) ? styles.selected : ''}>8</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 9 }) }} className={(page === 9) ? styles.selected : ''}>9</button></li>
        <li><button onClick={() => { dispatch({ type: 'change', payload: 10 }) }} className={(page === 10) ? styles.selected : ''}>10</button></li>
        <li><button onClick={nextPage}><GrNext /></button></li>
      </ul>
    );
  }
}

export default NoticePagination;
