import styles from "../../styles/Profile/Scrabs.module.scss";

function Scrabs({ comp, setComp }) {
  if (comp === "스크랩") {
    return (
      <div>
        <div className={styles.profileHeader}>
          <button onClick={() => setComp("프로필")}>프로필</button>
          <button onClick={() => setComp("스크랩")}>스크랩</button>
        </div>
      </div>
    );
  }
  return null;
}

export default Scrabs;
