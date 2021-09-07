import Link from "next/link";
import styles from "../../styles/Board/Write/WriteContent.module.scss";
import ReactQuillContainer from "./ReactQuillContainer";

function Write() {
  return (
    <div className={styles.container}>
      <input type="text" placeholder="제목을 입력하세요..." />
      <hr />
      <div></div>
      <ReactQuillContainer />
      <div>
        <Link href="/writepromotion" passHref>
          <button>등록</button>
        </Link>
      </div>
    </div>
  );
}

export default Write;
