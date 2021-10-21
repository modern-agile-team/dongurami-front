import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Container from './Container';
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import ImageEdit from './ImageEdit';

function Edit({ api }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const post = await api.getPost();

      setTitle(post.board.title);
      setDescription(post.board.description);
      setImages(post.images);
    })();
  }, []);

  const onSubmit = () => {
    api.putPost(title, description).then(() => {
      router.back();
    });
  };

  const onClose = () => {
    setShowModal(!showModal);
  };

  const onOpen = () => {
    setShowModal(true);
  };

  return (
    <>
      <Container type="글 수정하기">
        <WriteContent
          title={title}
          description={description}
          setTitle={setTitle}
          setDescription={setDescription}
          onSubmit={onSubmit}
          onOpen={onOpen}
        />
      </Container>
      <Modal show={showModal} onClose={onClose}>
        <ImageEdit images={images} />
      </Modal>
    </>
  );
}

export default Edit;
