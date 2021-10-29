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
  const [pid, setPid] = useState();
  const post = useSelector((state) => state.post);

  useEffect(() => {
    if (!router.isReady) return;
    setPid(router.query.pid);
  }, [router]);
  useEffect(() => {
    if (!pid) return;
    dispatch(getPost({ category, pid }));
  }, [category, pid, dispatch]);
  useEffect(() => {
    if (!post) return;
    setTitle(post.title);
    setDescription(post.description);
  }, [post])

  const onSubmit = async () => {
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
