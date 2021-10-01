import style from "../../../styles/Common/Comment/CommentContainer.module.scss";
import Comment from "./Comment";
import AddComment from "./AddComment";
import ReplyContainer from "./ReplyContainer";
import React, { useState } from "react";

function CommentContainer({
  comments,
  postComment,
  putComment,
  deleteComment,
  postReplyComment,
  putReplyComment,
  deleteReplyComment,
}) {
  const [addReplyID, setAddReplyID] = useState();

  return (
    <>
      <p>댓글 {comments.length}</p>
      <hr />
      <div className={style.container}>
        {comments.map((comment) => (
          <React.Fragment key={comment.no}>
            {comment.depth ? (
              <ReplyContainer>
                <Comment
                  comment={comment}
                  setAddReplyID={setAddReplyID}
                  putComment={putReplyComment}
                  deleteComment={deleteReplyComment}
                />
              </ReplyContainer>
            ) : (
              <Comment
                comment={comment}
                setAddReplyID={setAddReplyID}
                putComment={putComment}
                deleteComment={deleteComment}
              />
            )}
            {addReplyID === comment.no && (
              <ReplyContainer>
                <AddComment
                  postComment={postReplyComment}
                  parentCommentID={comment.groupNo}
                />
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
