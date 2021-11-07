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
                    parentCommentID={parentCommentID}
                  />
                </ReplyCommentContainer>
              ) : (
                <Comment
                  comment={comment}
                  setParentCommentID={setParentCommentID}
                />
              )}
              {parentCommentID === comment.no && (
                <ReplyCommentContainer>
                  <AddComment
                    comments={comments}
                    postId={postId}
                    parentCommentID={parentCommentID}
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
