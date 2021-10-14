import styles from 'styles/Profile/WriteScraps.module.scss';
import Container from 'components/Write/Container';
import WriteContent from 'components/Write/WriteContent';
import { useEffect, useState } from 'react';
import { addPost } from 'apis/profile';
import { useRouter } from 'next/router';
import router from 'next/router';

const WriteScrpas = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const uRouter = useRouter();
  const data = uRouter.query;

  const onSubmit = async () => {
    await addPost(data.pid, data.clubNum, {
      title,
      description,
      images: []
    })
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    router.push(`/profile/${data.pid}`);
  };

  return (
    <Container category="personal" type="글 작성하기">
      <WriteContent
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
