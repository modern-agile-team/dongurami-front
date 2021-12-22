import styles from 'styles/Board/Board/Pagination.module.scss';

const Item = ({ itemPage, setPage, page }) => {
  return (
    <li>
      <button
        onClick={() => {
          setPage(itemPage);
        }}
        className={page === itemPage ? styles.selected : ''}
      >
        {itemPage}
      </button>
    </li>
  );
};

export default Item;
