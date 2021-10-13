import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import WriteContent from './WriteContent';

function Edit({ category, api }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const post = await api.getPost();
      setTitle(post.title);
      setDescription(post.description);
    })();
  }, [api]);

  const onSubmit = () => {
    api.putPost(title, description).then(() => {
      router.back();
    });
  };

  return (
    <Container category={category} type="글 수정하기">
      <WriteContent title={title} description={description} setTitle={setTitle} setDescription={setDescription} onSubmit={onSubmit} />
    </Container>
  );
}

export default Edit;
