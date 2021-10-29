import styles from '../../../styles/Club/Home/Intro/Desc.module.scss';
import ReactQuillContainer from 'components/Write/ReactQuillContainer';
import dynamic from 'next/dynamic';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

const Button = ({ isDescriptionUpdate, onDescSubnmit, toggleDescription }) => {
  return (
    <>
      {isDescriptionUpdate ? (
        <button onClick={onDescSubnmit}>Finish</button>
      ) : (
        <button onClick={toggleDescription}>✏️ Edit</button>
      )}
    </>
  );
};

const Desc = ({
  toggleDescription,
  isDescriptionUpdate,
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
        {isDescriptionUpdate ? (
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
            isDescriptionUpdate={isDescriptionUpdate}
            onDescSubnmit={onDescSubnmit}
            toggleDescription={toggleDescription}
          />
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default Desc;
