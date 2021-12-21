import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';
import styles from 'styles/Club/Home/Schedule/DailyModal.module.scss';

const Confirm = ({ pop, onAddBtn, onModifyBtn, color }) => {
  return (
    <div className={styles.btnContainer}>
      <span className={styles.sample} style={{ background: color }}>
        색상 미리보기
      </span>
      <DonguramiOutlineButton
        className={styles.addBtn}
        onClick={(e) => (pop === 'DailyModal' ? onAddBtn(e) : onModifyBtn())}
      >
        ✏️ 확인
      </DonguramiOutlineButton>
    </div>
  );
};

export default Confirm;
