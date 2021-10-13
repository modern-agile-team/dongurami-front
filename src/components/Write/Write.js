import { useState } from "react";
import Container from "./Container";
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import WritePromotion from "./WritePromotion";
import { postPost } from 'apis/board';
import { useRouter } from 'next/router';

function Write({ category }) {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);

  const onSubmit = async () => {
    if (category === 'promotion') {
      setShowModal(true);
      return;
    }
    await postPost(category, { title, description });
    router.back();
  };
  const onClose = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Container category={category} type="글 작성하기">
        <WriteContent title={title} description={description} setTitle={setTitle} setDescription={setDescription} onSubmit={onSubmit} />
      </Container>
      <Modal show={showModal} onClose={onClose}>
        <WritePromotion title={title} description={description}/>
      </Modal>
    </>
  );
}

export default Write;
