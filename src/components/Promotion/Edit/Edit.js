import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Container from './Container';
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import ImageEdit from './ImageEdit';
import { getPost } from 'apis/promotion';

function Edit({ pid }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = (async () => {
      await getPost(pid).then((response) => {
        if (response.data.success) {
          setImages(response.data.images);
          setTitle(response.data.board.title);
          setDescription(response.data.board.description);
        }
      });
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
      {images.length > 0 && (
        <Modal show={showModal} onClose={onClose}>
          <ImageEdit images={images} title={title} />
        </Modal>
      )}
    </>
  );
}

export default Edit;
