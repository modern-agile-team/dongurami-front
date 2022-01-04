import styles from 'styles/Club/Home/Intro/Desc.module.scss';
import ReactQuillContainer from 'components/Write/ReactQuillContainer';
import dynamic from 'next/dynamic';
import { DonguramiOutlineButton } from 'components/Common/DonguramiButton';

const ReactQuill = dynamic(import('react-quill'), {
  ssr: false
});

const Button = ({ isDescriptionUpdate, onDescSubnmit, toggleDescription }) => {
  return (
    <>
      {isDescriptionUpdate ? (
        <DonguramiOutlineButton onClick={onDescSubnmit}>
          Finish
        </DonguramiOutlineButton>
      ) : (
        <DonguramiOutlineButton onClick={toggleDescription}>
          ✏️ Edit
        </DonguramiOutlineButton>
      )}
    </>
  );
};

const Desc = ({
  toggleDescription,
  isDescriptionUpdate,
  onDescSubnmit,
  setIntroDesc,
  clubs,
  introDesc
}) => {
  const result = clubs.info.result.clubInfo;
  const client = clubs.info.result.clientInfo;
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
