import Container from 'components/Write/Container';
import WriteContent from 'components/Write/WriteContent';
import { useEffect, useState } from 'react';
import { addPost, addScrapPost } from 'apis/profile';
import api from 'apis/post';
import { useRouter } from 'next/router';

const WriteScrpas = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [boardDescription, setBoardDescription] = useState('');
  const router = useRouter();
  const data = router.query;

  useEffect(() => {
    if (data.scrapNum !== undefined) {
      api
        .getPost('clubActivity', data.scrapNum)
        .then((res) => setBoardDescription(res.data.board.description))
        .catch((err) => alert(err.response.data.msg));
    }
  }, [data.scrapNum]);

  const onSubmit = async () => {
    if (title.length > 255) {
      alert('제목은 255자 이하여야합니다.');
    } else {
      if (data.scrapNum !== undefined) {
        addScrapPost(data.clubNum, data.scrapNum, {
          title,
          scrapDescription: description,
          boardDescription
        })
          .then((res) => {
            alert(res.data.msg);
          })
          .catch((err) => alert(err.response.data.msg));
        // router.push(`/profile/${data.pid}`);
      } else {
        await addPost(data.pid, data.clubNum, {
          title,
          descriptionx
        }).catch((err) => alert(err.response.data.msg));
        // router.push(`/profile/${data.pid}?category=scrap`);
      }
    }
  };

  return (
    <Container category="personal" type="글 작성하기">
      <WriteContent
        category="personal"
        title={title}
        description={description}
        setTitle={setTitle}
        setDescription={setDescription}
        onSubmit={onSubmit}
      />
    </Container>
  );
};

export default WriteScrpas;
