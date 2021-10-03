import style from "../../../styles/Common/Comment/CommentContainer.module.scss";
import Comment from "./Comment";
import AddComment from "./AddComment";
import ReplyContainer from "./ReplyContainer";
import React, { useState } from "react";

function CommentContainer({ comments, api, updatePost }) {
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
                  updatePost={updatePost}
                />
              </ReplyContainer>
            ) : (
              <Comment
                comment={comment}
                setAddReplyID={setAddReplyID}
                api={api}
                updatePost={updatePost}
              />
            )}
            {addReplyID === comment.no && (
              <ReplyContainer>
<<<<<<< HEAD
                <AddComment
                  postComment={postReplyComment}
                  parentCommentID={comment.groupNo}
                />
=======
                <AddComment parentCommentID={comment.groupNo} api={api} updatePost={updatePost} />
>>>>>>> 176bf0593ac5e36ea1042e2dee41ce4884e0332d
              </ReplyContainer>
            )}
          </React.Fragment>
        ))}
        <AddComment api={api} updatePost={updatePost} />
      </div>
    </>
  );
}

export default CommentContainer;
