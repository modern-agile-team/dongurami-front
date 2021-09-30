import { useEffect, useRef, useState } from "react";
import { AiOutlineCheck, AiOutlineDelete, AiOutlineEdit } from "react-icons/ai";
import styles from "../../../styles/Board/Promotion/Comment.module.scss";

const Comment = ({ comment, postId }) => {
  const [isContentEditable, setIsContentEditable] = useState(false);
  const descriptionDiv = useRef();

  return (
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
          {comment.no === comment.groupNo && <p>답글 쓰기</p>}
        </div>
      </div>
    </div>
  );
};

export default Comment;
