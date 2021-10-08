import styles from '../../../styles/Board/Write/Container.module.scss';

function Container({ children, category, type }) {
  const title = '홍보게시판';

  return (
    <div className={styles.container}>
      <h1>
        {title} {type}
      </h1>
      {children}
    </div>
  );
}

export default Container;
