import Link from "next/link";
import styles from "../../styles/Board/Write/WritePromotionContent.module.scss";

function WritePromition() {
  return (
    <div className={styles.container}>
      <div>
        <div className={styles.uploadContainer}>
          <label htmlFor="imageInput">
            <img src="https://picsum.photos/500" alt="preview" />
            <p>사진 업로드</p>
          </label>
          <input id="imageInput" type="file" accept="image/*" />
        </div>
        <div className={styles.selectContainer}>
          <select>
            <option>동아리 선택</option>
            <option>우아한 애자일</option>
            <option>그웨</option>
          </select>
          <select>
            <option>태그 선택</option>
            <option>개발</option>
            <option>친목</option>
          </select>
        </div>
      </div>
      <Link href="/promotion" passHref>
        <button>등록</button>
      </Link>
    </div>
  );
}

export default WritePromition;
