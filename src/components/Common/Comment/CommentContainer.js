import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from "./Comment";
import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import React, { useState } from 'react';

function CommentContainer({ comments }) {
  const [addReplyIndex, setAddReplyIndex] = useState();

  return (
    <>
      <p>댓글 {comments.length}</p>
      <hr />
      <div className={style.container}>
        {comments.map((comment, i) => (
          <React.Fragment key={comment.no}>
            {(comment.depth) ? (
              <ReplyContainer>
                <Comment comment={comment} index={i} setAddReplyIndex={setAddReplyIndex} />
              </ReplyContainer>
            ) : (
              <Comment comment={comment} index={i} setAddReplyIndex={setAddReplyIndex} />
            )}
            {(addReplyIndex === i) && (
              <ReplyContainer>
                <AddComment />
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
