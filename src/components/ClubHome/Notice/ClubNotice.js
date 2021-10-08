import Board from 'components/Board/Board';
import styles from 'styles/Club/Home/Notice/ClubNotice.module.scss';

function ClubNotice() {
  return (
    <div className={styles.container}>
      <Board category="club/board/clubActivity/1" />
    </div>
  );
}

export default ClubNotice;
