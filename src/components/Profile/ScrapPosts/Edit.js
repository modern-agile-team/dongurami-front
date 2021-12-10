import Container from 'components/Write/Container';
import WriteContent from 'components/Write/WriteContent';
import router from 'next/router';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getBPost, getSPost, modifyBPost, modifySPost } from 'apis/profile';

const Edit = () => {
  const uRouter = useRouter();
  const data = uRouter.query;
  const queryData = [data.pid, data.clubNum, data.boardNum];
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [post, setPost] = useState();

  const getBoardPost = () => {
    getBPost(...queryData)
      .then((res) => {
        setPost(res.data.board);
        setDescription(res.data.board.description);
        setTitle(res.data.board.title);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  const getScrapPost = () => {
    getSPost(...queryData)
      .then((res) => {
        setPost(res.data.scrap);
        setDescription(res.data.scrap.scrapDescription);
        setTitle(res.data.scrap.title);
      })
      .catch((err) => alert(err.reponse.data.msg));
  };

  const onSubmit = () => {
    if (title.length > 255) {
      alert('제목은 255자 이하여야 합니다.');
    } else {
      if (data.no === 'scrap')
        modifySPost(...queryData, {
          title,
          description
        })
          .then((res) => alert('수정이 완료되었습니다.'))
          .catch((err) => alert(err.response.data.msg));
      else if (data.no === 'board')
        modifyBPost(...queryData, {
          title,
          description
        })
          .then((res) => alert('수정이 완료되었습니다.'))
          .catch((err) => alert(err.response.data.msg));
      router.push(`/profile/${data.pid}`);
    }
  };

  useEffect(() => {
    if (!uRouter.isReady) return;
    data.no === 'board' ? getBoardPost() : getScrapPost();
  }, [uRouter, data.no]);

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
