import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Container from './Container';
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import ImageEdit from './ImageEdit';
import { getBoardPost, putPost } from 'apis/promotion';
import Router from 'next/dist/next-server/server/router';

function Edit({ pid }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [posterImages, setPosterImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = (async () => {
      await getBoardPost(pid).then((response) => {
        if (response.data.success) {
          setPosterImages(response.data.images);
          setTitle(response.data.board.title);
          setDescription(response.data.board.description);
        }
      });
    })();
  }, []);

  const onSubmit = async (images) => {
    await putPost(pid, title, description, images).then((response) => {
      if (response.data.success) console.log(response);
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
      {posterImages.length > 0 && (
        <Modal show={showModal} onClose={onClose}>
          <ImageEdit
            posterImages={posterImages}
            title={title}
            onSubmit={onSubmit}
          />
        </Modal>
      )}
    </>
  );
}

export default Edit;
