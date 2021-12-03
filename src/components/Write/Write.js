import { useState } from 'react';
import Container from './Container';
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import WritePromotion from './WritePromotion';
import { postPost } from 'apis/board';
import { useRouter } from 'next/router';

function Write({ category }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [isAnon, setIsAnon] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('제목과 본문을 작성해 주세요!');
      return;
    }
    if (title.length > 255) {
      alert('제목을 255자 이하로 작성해 주세요!');
      return;
    }
    if (category === 'promotion') {
      setShowModal(true);
      return;
    }
    await postPost(category, { title, description, hiddenFlag: Boolean(isAnon) }, router.query.id);
    if (['clubNotice', 'clubActivity'].includes(category)) router.back();
    else {
      router.push(`/${category}`);
    }
  };
  const onClose = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <Container category={category} type="글 작성하기">
        <WriteContent
          category={category}
          title={title}
          description={description}
          isAnon={isAnon}
          setTitle={setTitle}
          setDescription={setDescription}
          setIsAnon={setIsAnon}
          onSubmit={onSubmit}
        />
      </Container>
      <Modal show={showModal} onClose={onClose}>
        <WritePromotion title={title} description={description} />
      </Modal>
    </>
  );
}

export default Write;
