import { putPost } from 'apis/board';
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';
import Container from "./Container";
import WriteContent from './WriteContent';

function Edit({ category }) {
  const router = useRouter();
  const dispatch = useDispatch();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const post = useSelector((state) => state.post);

  const { pid, id } = router.query;

  useEffect(() => {
    if (!pid || !id) return;
    dispatch(getPost({ category, pid, clubNum: id }));
  }, [category, pid, id, dispatch]);
  useEffect(() => {
    if (!post) return;
    setTitle(post.title);
    setDescription(post.description);
  }, [post])

  const onSubmit = async () => {
    if (title.trim() === '' || description.trim() === '') {
      alert('제목과 본문을 작성해 주세요!');
      return;
    }
    if (title.length > 255) {
      alert('제목을 255자 이하로 작성해 주세요!');
      return;
    }
    await putPost(category, pid, { title, description });
    router.back();
  };

  return (
    <Container category={category} type="글 수정하기">
      <WriteContent title={title} description={description} setTitle={setTitle} setDescription={setDescription} onSubmit={onSubmit} />
    </Container>
  );
}

export default Edit;
