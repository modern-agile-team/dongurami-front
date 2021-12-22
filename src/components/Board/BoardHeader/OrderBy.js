import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';
import styles from 'styles/Board/Board/Board.module.scss';
import Link from 'next/link';

const OrderBy = ({ canWrite, router, sort, order, onOrderChange }) => {
  return (
    <div className={styles.orderBy}>
      {canWrite && (
        <Link
          href={{
            pathname: `${router.pathname}/write`,
            query: router.query
          }}
          passHref
        >
          <DonguramiOutlineButton>✏️ 글쓰기</DonguramiOutlineButton>
        </Link>
      )}
      <select value={`${sort} ${order}`} onChange={onOrderChange}>
        <option value="inDate DESC">최근순</option>
        <option value="inDate ASC">오래된순</option>
        <option value="hit DESC">조회수순</option>
      </select>
    </div>
  );
};

export default OrderBy;
