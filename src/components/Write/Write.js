import Link from 'next/link';
import styles from '../../styles/Board/Write/Write.module.scss';
import ReactQuillContainer from './ReactQuillContainer';

function Write() {
  return (
    <div className={styles.container}>
      <input placeholder="제목을 입력하세요" />
      <ReactQuillContainer />
      <Link href="/notice" passHref>
        <button>글 작성</button>
      </Link>
    </div>
  );
}

export default Write;
