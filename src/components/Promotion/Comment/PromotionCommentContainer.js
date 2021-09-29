import style from "../../../styles/Board/Promotion/PromotionCommentContainer.module.scss";
import AddComment from "./AddComment";
import React, { useState } from "react";

const PromotionCommentContainer = ({ comments }) => {
  const [addReplyID, setAddReplyID] = useState();

  return (
    <>
      <p>댓글 {comments.length}</p>
      <hr />
      <div className={style.container}>
        <AddComment />
      </div>
    </>
  );
};

export default PromotionCommentContainer;
