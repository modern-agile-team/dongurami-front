import moment from 'moment';
import styles from 'styles/Board/Board/Table.module.scss';

const Tr = ({ post }) => {
  return (
    <tr key={post.no}>
      <td>{post.no}</td>
      <td>
        <div className={styles.titleContainer}>
          <div className={styles.title}>{post.title}</div>
          &nbsp;
          <div className={styles.commentCount}>{`[${post.commentCount}]`}</div>
        </div>
      </td>
      <td>{post.studentName}</td>
      <td>{moment(post.inDate).format('MM-DD')}</td>
      <td>{post.hit}</td>
      <td>{post.emotionCount}</td>
    </tr>
  );
};

export default Tr;
