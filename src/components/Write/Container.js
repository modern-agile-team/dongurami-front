import styles from "../../styles/Board/Write/Container.module.scss";
import Header from "../Common/Header";

function Container({ children, category }) {
  const title = (
    (category === 'notice') ? '공지 게시판' :
    (category === 'free') ? '자유 게시판' :
    (category === 'promotion') ? '홍보 게시판' :
    undefined
  );

  return (
    <div className={styles.container}>
      <Header />
      <h1>{title} 글쓰기</h1>
      {children}
    </div>
  );
}

export default Container;
