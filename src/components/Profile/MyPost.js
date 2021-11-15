import styles from 'styles/Profile/Scraps.module.scss';

const MyPost = () => {
  return (
    <div className={styles.wrap}>
      <div className={styles.container}>
        <div className={styles.headerBox}>
          <div className={styles.header}>
            <select>
              <option>전체보기</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
};
export default MyPost;
