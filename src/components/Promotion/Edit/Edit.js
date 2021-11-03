import { useRouter } from 'next/router';
import { useEffect, useMemo, useState } from 'react';
import Container from './Container';
import WriteContent from './WriteContent';
import Modal from 'components/Common/Modal';
import ImageEdit from './ImageEdit';
import { getBoardPost, putPost } from 'apis/promotion';

function Edit({ pid }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [showModal, setShowModal] = useState(false);
  const [images, setImages] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getData = (async () => {
      await getBoardPost(pid).then((response) => {
        if (response.data.success) {
          setImages(response.data.images.map((el) => el.imgPath));
          setTitle(response.data.board.title);
          setDescription(response.data.board.description);
        }
      });
    })();
  }, []);

  const onSubmit = async () => {
    if (!title.length && !description.length) {
      alert('제목 및 글 내용을 작성해주세요');
      return;
    }
    await putPost(pid, title, description, images).then((response) => {
      if (response.data.success) {
        alert('게시글이 수정되었습니다');
        router.back();
      }
    });
  };

  const onClose = () => {
    setShowModal(!showModal);
  };

  const onOpen = () => {
    setShowModal(true);
  };

  const onEditImages = (editImages) => {
    if (!editImages.length) {
      alert('이미지를 1개 이상 등록해주세요');
      return;
    }
    setImages(editImages);
    setShowModal(false);
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
      {title && (
        <Modal show={showModal} onClose={onClose}>
          <ImageEdit
            images={images}
            setImages={setImages}
            title={title}
            onSubmit={onSubmit}
            onEditImages={onEditImages}
          />
        </Modal>
      )}
    </>
  );
}

export default Edit;
