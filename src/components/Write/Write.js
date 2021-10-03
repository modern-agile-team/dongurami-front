import { useRouter } from "next/router";
import { useState } from "react";
import Container from "./Container";
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import WritePromotion from "./WritePromotion";

function Write({ category, Api }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [showModal, setShowModal] = useState(false);
  const router = useRouter();

  const api = new Api(router);

  const onSubmit = () => {
    if (category === 'promotion') {
      setShowModal(true);
      return;
    }
    api.post(title, body);
  };
  const onClose = () => {
    setShowModal(!showModal);
  }

  return (
    <>
      <Container category={category} type="글 작성하기">
        <WriteContent title={title} body={body} setTitle={setTitle} setBody={setBody} onSubmit={onSubmit} />
      </Container>
      <Modal show={showModal} onClose={onClose}>
        <WritePromotion title={title} body={body} />
      </Modal>
    </>
  );
}

export default Write;
