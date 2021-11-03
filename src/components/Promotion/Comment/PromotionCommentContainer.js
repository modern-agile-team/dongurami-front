import style from '../../../styles/Board/Promotion/PromotionCommentContainer.module.scss';
import AddComment from './AddComment';
import React, { useState } from 'react';
import Comment from './Comment';
import ReplyComment from './ReplyComment';
import { useSelector } from 'react-redux';

const PromotionCommentContainer = ({
  comments,
  postId,
  getData,
  studentId
}) => {
  const user = useSelector((state) => state.user);
  return (
    <>
      <p>댓글 {comments.length}</p>
      <div className={style.container}>
        {comments &&
          comments.map((comment, index) => (
            <>
              {comment.groupNo === comment.no && (
                <>
                  <Comment
                    key={index}
                    comment={comment}
                    postId={postId}
                    getData={getData}
                    studentId={studentId}
                  />
                </>
              )}
              {comment.no !== comment.groupNo && (
                <ReplyComment
                  key={comment.no}
                  commentList={comments}
                  postId={postId}
                  getData={getData}
                  parentCommentId={comment.groupNo}
                  studentId={studentId}
                />
              )}
            </>
          ))}
        {user && <AddComment comments={comments} postId={postId} />}
      </div>
    </>
  );
};

export default PromotionCommentContainer;
