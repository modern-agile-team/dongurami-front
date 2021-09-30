import style from "../../../styles/Board/Promotion/PromotionCommentContainer.module.scss";
import AddComment from "./AddComment";
import React, { useState } from "react";
import Comment from "./Comment";

const PromotionCommentContainer = ({ comments, postId, getData }) => {
  const [addReplyID, setAddReplyID] = useState();

  return (
    <>
      <p>댓글 {comments.length}</p>
      <hr />
      <div className={style.container}>
        {comments &&
          comments.map((comment, index) => (
            <>
              <Comment key={index} comment={comment} postId={postId} />
            </>
          ))}
        <AddComment comments={comments} postId={postId} getData={getData} />
      </div>
    </>
  );
};

export default PromotionCommentContainer;
