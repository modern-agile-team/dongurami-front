import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import Container from "./Container";
import WriteContent from './WriteContent';

function Edit({ category }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  useEffect(() => {
    if (!router.query.pid) return;
    axios.get(`http://3.36.72.145:8080/api/board/${category}/${router.query.pid}`)
      .then((response) => {
        setTitle(response.data.board.title);
        setBody(response.data.board.description);
      });
  }, [category, router]);

  const onSubmit = () => {
    axios.put(`http://3.36.72.145:8080/api/board/${category}/${router.query.pid}`, {
      title,
      description: body
    }).then(() => {
      router.push(`/${category}/${router.query.pid}`);
    });
  };

  return (
    <Container>
      <WriteContent title={title} body={body} setTitle={setTitle} setBody={setBody} onSubmit={onSubmit} />
    </Container>
  );
}

export default Edit;
