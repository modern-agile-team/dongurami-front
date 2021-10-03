import style from "../../../styles/Board/Promotion/PromotionCommentContainer.module.scss";
import AddComment from "./AddComment";
import React, { useState } from "react";
import Comment from "./Comment";
import ReplyComment from "./ReplyComment";
import ReplyCommentContainer from "./ReplyCommentContainer";

const PromotionCommentContainer = ({ comments, postId, getData }) => {
  const [replyComment, setReplyComment] = useState([]);

  return (
    <>
      <p>댓글 {comments.length}</p>
      <hr />
      <div className={style.container}>
        {comments &&
          comments.map((comment, index) => (
            <>
              {comment.groupNo === comment.no && (
                <>
                  <Comment
                    key={index}
                    comment={comment}
                    postId={postId}
                    getData={getData}
                  />
                </>
              )}
              {comment.no !== comment.groupNo && (
                <ReplyComment
                  key={comment.no}
                  commentList={comments}
                  postId={postId}
                  getData={getData}
                  parentCommentId={comment.groupNo}
                />
              )}
            </>
          ))}
        <AddComment comments={comments} postId={postId} getData={getData} />
      </div>
    </>
  );
};

export default PromotionCommentContainer;
