import styles from '../../../styles/Club/Home/Intro/Desc.module.scss';
import { IoPencil } from 'react-icons/io5';
import ReactQuillContainer from 'components/Write/ReactQuillContainer';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

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
  onDescUpdate,
  descUpdate,
  onDescSubnmit,
  setIntroDesc,
  infos,
  introDesc
}) => {
  const result = infos.result[0];
  const client = infos.clientInfo;
  return (
    <div className={styles.intro}>
      <span>동아리 소개</span>
      <div className={styles.desc}>
        {descUpdate ? (
          <ReactQuillContainer
            setDescription={setIntroDesc}
            description={introDesc}
          />
        ) : (
          <ReactQuill
            className={styles.bubble}
            value={result.introduce}
            readOnly
          />
        )}
      </div>
      {client.leader === 1 ? (
        <div className={styles.button}>
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
