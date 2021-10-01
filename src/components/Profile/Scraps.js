import styles from "../../styles/Profile/Scraps.module.scss";
import { BsFileText } from "react-icons/bs";

function Scraps({ data, comp, scrapData }) {
  if (comp === "스크랩") {
    return (
      <div>
        <div>
          <span>게시물 추가</span>
          <select>
            {data.profile.club.map((club, index) => {
              return <option key={index}>{club.title}</option>;
            })}
          </select>
        </div>
        <div className={styles.postItem}>
          {scrapData.map((data, index) => {
            return (
              <div>
                {data.fileUrl === null ? (
                  <BsFileText className={styles.thumbnail} />
                ) : (
                  <img className={styles.thumbnail} src={data.fileUrl} />
                )}
                <br />
                <span>{data.title}</span>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
  return null;
}

export default Scraps;
