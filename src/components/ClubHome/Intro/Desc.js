import styles from '../../../styles/Club/Home/Intro/Desc.module.scss';
import { IoPencil } from 'react-icons/io5';

const Button = ({ descUpdate, onDescSubnmit, onDescUpdate }) => {
  return (
    <>
      {descUpdate ? (
        <button onClick={onDescSubnmit}>Finish</button>
      ) : (
        <button onClick={onDescUpdate}>
          <IoPencil />
          Edit
        </button>
      )}
    </>
  );
};

const Desc = ({
  onDescChange,
  onDescUpdate,
  descUpdate,
  onDescSubnmit,
  infos
}) => {
  const result = infos.result[0];
  const client = infos.clientInfo;
  return (
    <div className={styles.intro}>
      <span>동아리 소개</span>
      <div id={styles.desc}>
        {descUpdate ? (
          <textarea onChange={onDescChange} defaultValue={result.introduce} />
        ) : (
          <p>{result.introduce}</p>
        )}
      </div>
      {client.leader === 1 ? (
        <div>
          <Button
            descUpdate={descUpdate}
            onDescSubnmit={onDescSubnmit}
            onDescUpdate={onDescUpdate}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Desc;
