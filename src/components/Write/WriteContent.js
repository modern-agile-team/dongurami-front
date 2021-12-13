import { DonguramiFillButton } from 'components/Common/DonguramiButton';
import { useState } from 'react';
import styles from '../../styles/Board/Write/WriteContent.module.scss';
import ReactQuillContainer from './ReactQuillContainer';

function Write({
  category,
  title,
  description,
  isAnon,
  setTitle,
  setDescription,
  setIsAnon,
  onSubmit
}) {
  const [isImageUploading, setIsImageUploading] = useState(false);

  const onClick = () => {
    if (isImageUploading) {
      alert('이미지 업로드중입니다...');
      return;
    }
    onSubmit();
  };

  return (
    <div className={styles.container}>
      <input
        type="text"
        placeholder="제목을 입력하세요..."
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <hr />
      <ReactQuillContainer
        description={description}
        setDescription={setDescription}
        setIsImageUploading={setIsImageUploading}
      />
      <div>
        {category !== 'promotion' &&
          category !== 'notice' &&
          category !== 'clubNotice' &&
          category !== 'clubActivity' &&
          category !== 'personal' && (
            <label>
              익명여부:
              <input
                type="checkbox"
                checked={isAnon}
                onChange={() => setIsAnon(!isAnon)}
              />
            </label>
          )}
        <DonguramiFillButton onClick={onClick}>등록</DonguramiFillButton>
      </div>
    </div>
  );
}

export default Write;
