import style from "../../../styles/Common/Comment/CommentContainer.module.scss";
import Comment from "./Comment";
import AddComment from "./AddComment";
import ReplyContainer from "./ReplyContainer";
import React, { useState } from "react";

function CommentContainer({ comments, api }) {
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
                  api={api}
                />
              </ReplyContainer>
            ) : (
              <Comment
                comment={comment}
                setAddReplyID={setAddReplyID}
                api={api}
              />
            )}
            {addReplyID === comment.no && (
              <ReplyContainer>
                <AddComment parentCommentID={comment.groupNo} api={api} />
              </ReplyContainer>
            )}
          </React.Fragment>
        ))}
        <AddComment api={api} />
      </div>
    </>
  );
}

export default CommentContainer;
