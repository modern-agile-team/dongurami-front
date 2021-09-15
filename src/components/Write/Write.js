import { useRouter } from "next/router";
import { useState } from "react";
import Container from "./Container";
import WriteContent from './WriteContent';

function Write({ category }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const onSubmit = () => {
    axios.post(`http://3.36.72.145:8080/api/board/${category}`, {
      id: 'test1',
      clubNo: '1',
      title,
      description: body
    }).then(() => {
      router.push(`/${category}`);
    });
  };

  return (
    <Container category={category}>
      <WriteContent title={title} body={body} setTitle={setTitle} setBody={setBody} onSubmit={onSubmit} />
    </Container>
  );
}

export default Write;
