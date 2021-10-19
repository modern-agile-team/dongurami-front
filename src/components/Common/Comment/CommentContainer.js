import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from './Comment';
import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CommentContainer({ comments }) {
  const user = useSelector((state) => state.user);
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
        {(user) && <AddComment />}
      </div>
    </>
  );
}

export default CommentContainer;
