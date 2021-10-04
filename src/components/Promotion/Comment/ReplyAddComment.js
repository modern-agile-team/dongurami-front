import { useEffect, useState } from "react";
import styles from "../../../styles/Board/Promotion/AddComment.module.scss";
import axios from "axios";
import getToken from "utils/getToken";

function ReplyAddComment({
  postId,
  getData,
  parentCommentId,
  setReplyComment,
}) {
  const [description, setDescription] = useState("");
  const token = getToken();

  const onChange = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    axios
      .post(
        `http://3.36.72.145:8080/api/board/promotion/${postId}/${parentCommentId}`,
        {
          id: "test1",
          description,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then((res) => {
        if (res.data.success) {
          getData();
        } else alert(res.data.msg);
      })
    setDescription("");
  };
  return (
    <div className={styles.container}>
      <div>닉네임</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="댓글을 남겨보세요"
          value={description}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default ReplyAddComment;
