import React, { useEffect, useState } from "react";
import Comment from "./Comment";
import ReplyCommentContainer from "./ReplyCommentContainer";

const ReplyComment = ({ commentList, parentCommentId, postId, getData }) => {
  const renderReplyComment = (parentCommentId) => {
    return commentList.map((comment, index) => (
      <>
        {comment.groupNo === parentCommentId && comment.no !== parentCommentId && (
          <div style={{ width: "80%", marginLeft: "40px" }}>
            <Comment
              comment={comment}
              key={index}
              postId={postId}
              getData={getData}
            />
          </div>
        )}
      </>
    ));
  };

  return (
    <div>
      <ReplyCommentContainer>
        {renderReplyComment(parentCommentId)}
      </ReplyCommentContainer>
    </div>
  );
};

export default ReplyComment;
