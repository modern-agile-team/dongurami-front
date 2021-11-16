import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from './Comment';
import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import React, { useState } from 'react';
import { useSelector } from 'react-redux';

function CommentContainer({ comments }) {
  const user = useSelector((state) => state.user);
  const [parentCommentID, setParentCommentID] = useState();

  const toggleParentCommentID = (id) => {
    if (parentCommentID === id) setParentCommentID();
    else setParentCommentID(id);
  };

  return (
    <>
      <hr />
      <p>댓글 {comments.length}</p>
      <div className={style.container}>
        {comments.map((comment, index) => (
          <React.Fragment key={comment.no}>
            {comment.depth ? (
              <ReplyContainer>
                <Comment comment={comment} parentCommentID={comment.groupNo} />
              </ReplyContainer>
            ) : (
              <Comment comment={comment} setParentCommentID={toggleParentCommentID} />
            )}
            {(comment.groupNo === parentCommentID && comments[index + 1]?.depth !== 1) && (
              <ReplyContainer>
                <AddComment parentCommentID={parentCommentID} scroll />
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
