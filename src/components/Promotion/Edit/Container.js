import styles from '../../../styles/Board/Write/Container.module.scss';

function Container({ children, category, type }) {
  const title =
    category === 'notice'
      ? '공지 게시판'
      : category === 'free'
      ? '자유 게시판'
      : category === 'promotion'
      ? '홍보 게시판'
      : undefined;

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
