import Link from 'next/link';
import styles from 'styles/Board/Board/Table.module.scss';
import Th from './Th';
import Tr from './Tr';

function Table({ postsByPage, category, router, thName }) {
  return (
    <table className={styles.table}>
      <Th thName={thName} />
      <tbody>
        {postsByPage.map((post) => (
          <Link
            key={post.no}
            href={{
              pathname:
                category === 'clubNotice'
                  ? `${router.pathname}/notice/${post.no}`
                  : `${router.pathname}/${post.no}`,
              query: router.query
            }}
            passHref
          >
            <Tr post={post} />
          </Link>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
