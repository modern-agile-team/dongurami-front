import styles from '../../../styles/Club/Home/Intro/Desc.module.scss';
import { IoPencil } from 'react-icons/io5';

const Desc = ({
  onDescChange,
  introDesc,
  onDescUpdate,
  descUpdate,
  onDescSubnmit,
  leader
}) => {
  return (
    <div className={styles.intro}>
      <span>동아리 소개</span>
      <div id={styles.desc}>
        {descUpdate ? (
          <textarea onChange={onDescChange} defaultValue={introDesc} />
        ) : (
          <p>{introDesc}</p>
        )}
      </div>
      {leader === 1 ? (
        <div>
          {descUpdate ? (
            <button onClick={onDescSubnmit}>Finish</button>
          ) : (
            <button onClick={onDescUpdate}>
              <IoPencil />
              Edit
            </button>
          )}
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Desc;
