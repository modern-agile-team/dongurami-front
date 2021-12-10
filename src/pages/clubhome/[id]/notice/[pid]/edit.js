import Edit from 'components/Write/Edit';
import Head from 'next/head';

function EditNoticePost() {
  return (
    <>
      <Head>
        <title>동그라미 | 동아리 공지 수정</title>
      </Head>
      <Edit category="clubNotice" />
    </>
  );
}

export default EditNoticePost;
