import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from './Comment';
import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import React, { useState } from 'react';

function CommentContainer({ comments }) {
  const [parentCommentID, setParentCommentID] = useState();

  return (
    <>
      <p>댓글 {comments.length}</p>
      <hr />
      <div className={style.container}>
        {comments.map((comment) => (
          <React.Fragment key={comment.no}>
            {comment.depth ? (
              <ReplyContainer>
                <Comment comment={comment} parentCommentID={comment.groupNo} />
              </ReplyContainer>
            ) : (
              <Comment comment={comment} setParentCommentID={setParentCommentID} />
            )}
            {parentCommentID === comment.no && (
              <ReplyContainer>
                <AddComment parentCommentID={parentCommentID} />
              </ReplyContainer>
            )}
          </React.Fragment>
        ))}
        <AddComment />
      </div>
    </>
  );
}

export default CommentContainer;
