import Container from 'components/Write/Container';
import WriteContent from 'components/Write/WriteContent';
import router from 'next/router';
import { useRouter } from 'next/router';
import { useCallback, useEffect, useState } from 'react';
import { getBPost, getSPost, modifyBPost, modifySPost } from 'apis/profile';

const Edit = () => {
  const uRouter = useRouter();
  const data = uRouter.query;
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [post, setPost] = useState();

  const getBoardPost = useCallback(() => {
    getBPost(data.pid, data.clubNum, data.boardNum)
      .then((res) => {
        setPost(res.data.board);
        setDescription(res.data.board.description);
        setTitle(res.data.board.title);
      })
      .catch((err) => console.log(err.response));
  }, [data.pid, data.clubNum, data.boardNum]);

  const getScrapPost = useCallback(() => {
    getSPost(data.pid, data.clubNum, data.boardNum)
      .then((res) => {
        setPost(res.data.scrap);
        setDescription(res.data.scrap.description);
        setTitle(res.data.scrap.title);
      })
      .catch((err) => console.log(err));
  }, [data.pid, data.clubNum, data.boardNum]);

  const onSubmit = () => {
    if (data.no === 'scrap')
      modifySPost(data.pid, data.clubNum, data.boardNum, {
        title,
        description
      });
    else if (data.no === 'board')
      modifyBPost(data.pid, data.clubNum, data.boardNum, {
        title,
        description
      });
    router.push(`/profile/${data.pid}`);
  };

  useEffect(() => {
    if (!uRouter.isReady) return;
    data.no === 'board' ? getBoardPost() : getScrapPost();
  }, [uRouter, data.no, getBoardPost, getScrapPost]);

  return (
    <Container category="personal" type="글 수정하기">
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

export default Edit;
