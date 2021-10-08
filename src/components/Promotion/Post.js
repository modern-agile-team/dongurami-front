import React, { useCallback } from 'react';
import styles from '../../styles/Board/Promotion/Post.module.scss';
import PromotionCommentContainer from './Comment/PromotionCommentContainer';
import { useRouter } from 'next/router';
import Link from 'next/link';
import getToken from 'utils/getToken';
import axios from 'axios';

const Post = ({ postData, postId, getData, comments }) => {
  const { name, hit, title, inDate, description, studentId } = postData;
  const token = getToken();
  const router = useRouter();

  const onDelete = async () => {
    await axios
      .delete(`http://3.36.72.145:8080/api/board/promotion/${postId}`, {
        headers: {
          'x-auth-token': token
        }
      })
      .then((res) => {
        if (res.data.success) {
          alert('글 삭제가 완료되었습니다');
          setTimeout(function () {
            router.reload();
          }, 2000);
        }
      });
  };
  return (
    <div className={styles.post} onClick={(e) => e.stopPropagation()}>
      <div className={styles.container}>
        <div>
          <div>홍보게시판</div>
          <div>{title}</div>
          <div>
            <Link
              href={{
                pathname: `${router.pathname}/${postId}/edit`,
                query: router.query
              }}
              passHref
            >
              <button>수정하기</button>
            </Link>
            <button onClick={onDelete}>삭제하기</button>
          </div>
          <div>
            <div>{name}</div>
            <div>
              <div>{inDate}</div>
              <div>조회 {hit}</div>
            </div>
          </div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <PromotionCommentContainer
          comments={comments}
          postId={postId}
          studentId={studentId}
          getData={getData}
        />
      </div>
    </div>
  );
};

export default Post;
