import Board from 'components/Board';
import styles from 'styles/Club/Home/Notice/ClubNotice.module.scss';

function ClubNotice() {
  return (
    <div className={styles.container}>
      <Board category="clubNotice" />
    </div>
  );
}

export default ClubNotice;
