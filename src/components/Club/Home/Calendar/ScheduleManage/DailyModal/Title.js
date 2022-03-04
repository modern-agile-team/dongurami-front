import styles from 'styles/Club/Home/Schedule/DailyModal.module.scss';

const Title = ({ pop, title, setNewTitle, titleRef }) => {
  return (
    <>
      <p>일정 제목</p>
      <input
        type="text"
        placeholder={
          pop === 'DailyModal' ? '일정 제목을 입력하세요' : `${title}`
        }
        className={styles.titleInput}
        ref={titleRef}
        onChange={(e) => setNewTitle(e.target.value)}
      />
    </>
  );
};

export default Title;
