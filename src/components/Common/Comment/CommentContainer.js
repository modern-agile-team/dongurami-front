import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from "./Comment";
import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import React, { useState } from 'react';

function CommentContainer({ comments, postComment, putComment, deleteComment }) {
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
                <Comment comment={comment} index={i} setAddReplyIndex={setAddReplyIndex} putComment={putComment} deleteComment={deleteComment} />
              </ReplyContainer>
            ) : (
              <Comment comment={comment} index={i} setAddReplyIndex={setAddReplyIndex} putComment={putComment} deleteComment={deleteComment} />
            )}
            {(addReplyIndex === i) && (
              <ReplyContainer>
                <AddComment />
              </ReplyContainer>
            )}
          </React.Fragment>
        ))}
        <AddComment postComment={postComment} />
      </div>
    </>
  );
}

export default CommentContainer;
