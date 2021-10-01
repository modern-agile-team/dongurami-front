import React, { useEffect, useState } from "react";
import Comment from "./Comment";

const ReplyComment = ({ commentList, parentCommentId, postId }) => {
  const [childCommentNumber, setChildCommentNumber] = useState(0);
  const [openReplyComment, setOpenReplyComment] = useState(false);

  const renderReplyComment = (parentCommentId) => {
    return commentList.map((comment, index) => (
      <>
        {comment.responseTo === parentCommentId && (
          <div style={{ width: "80%", marginLeft: "40px" }}>
            <SingleComment
              comment={comment}
              refreshFunction={refreshFunction}
              postId={postId}
            />
            <ReplyComment
              refreshFunction={refreshFunction}
              parentCommentId={comment._id}
              commentList={commentList}
              postId={postId}
            />
          </div>
        )}
      </>
    ));
  };

  return (
    <div>
      {childCommentNumber > 0 && (
        <p
          style={{ fontSize: "14px", margin: 0, color: "gray" }}
          onClick={onHandleChange}
        >
          View {childCommentNumber} more Comment(s);
        </p>
      )}

      {openReplyComment && renderReplyComment(parentCommentId)}
    </div>
  );
};

export default ReplyComment;
