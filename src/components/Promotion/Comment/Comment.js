import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styles from "../../../styles/Board/Promotion/Comment.module.scss";
import AddComment from "components/Common/Comment/AddComment";
import ReplyCommentContainer from "./ReplyCommentContainer";
import ReplyAddComment from "./ReplyAddComment";

const Comment = ({ comment, postId, getData }) => {
  const [replyComment, setReplyComment] = useState(false);
  const onClick = () => {
    setReplyComment(!replyComment);
  };

  return (
    <>
      <div className={styles.comment}>
        <img src="https://picsum.photos/500" alt="profile" />
        <div>
          <div>
            <p>{comment.studentName}</p>
            <p>작성자</p>
          </div>
          <div>{comment.description}</div>
          <div>
            <p>{comment.inDate}</p>
            {comment.no === comment.groupNo && (
              <p onClick={onClick}>답글 쓰기</p>
            )}
          </div>
        </div>
      </div>
      {replyComment && (
        <ReplyCommentContainer>
          <ReplyAddComment
            parentCommentId={comment.groupNo}
            postId={postId}
            getData={getData}
          />
        </ReplyCommentContainer>
      )}
    </>
  );
};

export default Comment;
