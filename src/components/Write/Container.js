import styles from "../../styles/Board/Write/Container.module.scss";
import Header from "../Common/Header";

function Container({ children }) {
  return (
    <div className={styles.container}>
      <Header />
      <h1>자유게시판 글쓰기</h1>
      {children}
    </div>
  );
}

export default Container;
