import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import Container from "./Container";
import WriteContent from './WriteContent';

function Edit({ category, api }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  useEffect(() => {
    (async () => {
      const post = await api.getPost();
      setTitle(post.title);
      setBody(post.description);
    })();
  }, [api]);

  const onSubmit = () => {
    api.putPost(title, body).then(() => {
      router.back();
    });
  };

  return (
    <Container category={category} type="글 수정하기">
      <WriteContent title={title} body={body} setTitle={setTitle} setBody={setBody} onSubmit={onSubmit} />
    </Container>
  );
}

export default Edit;
