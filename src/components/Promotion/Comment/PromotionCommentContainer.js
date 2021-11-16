import style from '../../../styles/Board/Promotion/PromotionCommentContainer.module.scss';
import AddComment from './AddComment';
import React, { useState } from 'react';
import Comment from './Comment';
import ReplyCommentContainer from './ReplyCommentContainer';
import { useSelector } from 'react-redux';

const PromotionCommentContainer = ({
  comments,
  postId,
  getData,
  studentId
}) => {
  const user = useSelector((state) => state.user);
  const [parentCommentID, setParentCommentID] = useState();

  const toggleParentCommentId = (id) => {
    if (parentCommentID === id) setParentCommentID();
    else setParentCommentID(id);
  };
  return (
    <>
      <p>댓글 {comments.length}</p>
      <div className={style.container}>
        {comments &&
          comments.map((comment, index) => (
            <React.Fragment key={comment.no}>
              {comment.depth ? (
                <ReplyCommentContainer>
                  <Comment
                    comment={comment}
                    postId={postId}
                    getData={getData}
                    studentId={studentId}
                    parentCommentID={comment.groupNo}
                  />
                </ReplyCommentContainer>
              ) : (
                <Comment
                  comment={comment}
                  setParentCommentID={toggleParentCommentId}
                />
              )}
              {comment.groupNo === parentCommentID &&
                comments[index + 1]?.depth !== 1 && (
                  <ReplyCommentContainer>
                    <AddComment
                      comments={comments}
                      postId={postId}
                      parentCommentID={parentCommentID}
                      scroll
                    />
                  </ReplyCommentContainer>
                )}
            </React.Fragment>
          ))}
        {user && <AddComment comments={comments} postId={postId} />}
      </div>
    </>
  );
};

export default PromotionCommentContainer;
