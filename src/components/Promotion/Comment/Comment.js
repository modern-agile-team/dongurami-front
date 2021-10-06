import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styles from "../../../styles/Board/Promotion/Comment.module.scss";
import ReplyCommentContainer from "./ReplyCommentContainer";
import ReplyAddComment from "./ReplyAddComment";
import axios from "axios";
import getToken from "utils/getToken";

const Comment = ({ comment, postId, getData }) => {
  const [replyComment, setReplyComment] = useState(false);
  const [isContentEditable, setIsContentEditable] = useState(false);
  const descriptionDiv = useRef();
  const token = getToken();
  const onClick = () => {
    setReplyComment(!replyComment);
  };

  const onEdit = async () => {
    const body = {
      description: descriptionDiv.current.textContent,
    };

    if (isContentEditable) {
      await axios
        .put(
          `http://3.36.72.145:8080/api/board/promotion/${postId}/${comment.no}`,
          body,
          {
            headers: {
              "x-auth-token": token,
            },
          }
        )
        .then((response) => console.log(response));
    }
    setIsContentEditable(!isContentEditable);
  };

  return (
    <>
      <div className={styles.comment}>
        <img src="https://picsum.photos/500" alt="profile" />
        <div>
          <div>
            <p>{comment.studentName}</p>
            <p>작성자</p>
            <div>
              <button onClick={onEdit} className={styles["action-button"]}>
                {isContentEditable ? <AiOutlineCheck /> : <AiOutlineEdit />}
              </button>
              <button className={styles["action-button"]}>
                <AiOutlineDelete />
              </button>
            </div>
            s
          </div>
          <div ref={descriptionDiv} contentEditable={isContentEditable}>
            {comment.description}
          </div>
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
            setReplyComment={setReplyComment}
          />
        </ReplyCommentContainer>
      )}
    </>
  );
};

export default Comment;
