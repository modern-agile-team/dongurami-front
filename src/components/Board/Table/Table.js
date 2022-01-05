import Link from 'next/link';
import styles from 'styles/Board/Board/Table.module.scss';
import moment from 'moment';
import Th from './Th';

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
            <tr key={post.no}>
              <td>{post.no}</td>
              <td>
                <div className={styles.titleContainer}>
                  <div className={styles.title}>{post.title}</div>
                  &nbsp;
                  <div
                    className={styles.commentCount}
                  >{`[${post.commentCount}]`}</div>
                </div>
              </td>
              <td>{post.studentName}</td>
              <td>{moment(post.inDate).format('MM-DD')}</td>
              <td>{post.hit}</td>
              <td>{post.emotionCount}</td>
            </tr>
          </Link>
        ))}
      </tbody>
    </table>
  );
}

export default Table;
