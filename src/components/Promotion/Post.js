import React from "react";
import styles from "../../styles/Board/Promotion/Post.module.scss";
import CommentContainer from "components/Common/Comment/CommentContainer";
import { useCallback } from "react";
import { useRouter } from "next/router";
import getToken from "utils/getToken";
import axios from "axios";

const Post = ({ postData, postId, setPostData, comments }) => {
  const { name, hit, title, inDate, description } = postData;
  const token = getToken();
  const router = useRouter();

  const updatePost = axios
    .get(`http://3.36.72.145:8080/api/board/promotion/${postId}`)
    .then((response) => setPostData(response.data));

  const deletePost = axios
    .delete(`http://3.36.72.145:8080/api/board/promotion/${postId}`, {
      headers: {
        "x-auth-token": token,
      },
    })
    .then(() => router.push(`/promotion`));

  const postComment = (description) => {
    axios
      .post(
        `http://3.36.72.145:8080/api/board/promotion/${postId}`,
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
      .then(() => updatePost());
  };
  const putComment = (description, no) => {
    axios
      .put(
        `http://3.36.72.145:8080/api/board/promotion/${postId}/${no}`,
        {
          description,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => updatePost());
  };
  const deleteComment = (no) => {
    axios
      .delete(`http://3.36.72.145:8080/api/board/promotion/${postId}/${no}`, {
        headers: {
          "x-auth-token": token,
        },
      })
      .then(() => updatePost());
  };
  const postReplyComment = (description, parentCommentID) => {
    axios
      .post(
        `http://3.36.72.145:8080/api/board/promotion/${postId}/${parentCommentID}`,
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
      .then(() => updatePost());
  };
  const putReplyComment = (description, no, parentCommentID) => {
    axios
      .put(
        `http://3.36.72.145:8080/api/board/promotion/${postId}/${parentCommentID}/${no}`,
        {
          description,
        },
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => updatePost());
  };
  const deleteReplyComment = (no, parentCommentID) => {
    axios
      .delete(
        `http://3.36.72.145:8080/api/board/promotion/${postId}/${parentCommentID}/${no}`,
        {
          headers: {
            "x-auth-token": token,
          },
        }
      )
      .then(() => updatePost());
  };

  return (
    <div className={styles.post}>
      <div className={styles.container}>
        <div>
          <div>홍보게시판</div>
          <div>{title}</div>
          <div>
            <div>{name}</div>
            <div>
              <div>{inDate}</div>
              <div>조회 {hit}</div>
            </div>
          </div>
        </div>
        <hr />
        <div dangerouslySetInnerHTML={{ __html: description }}></div>
        <CommentContainer
          comments={comments}
          postComment={postComment}
          putComment={putComment}
          deleteComment={deleteComment}
          postReplyComment={postReplyComment}
          putReplyComment={putReplyComment}
          deleteReplyComment={deleteReplyComment}
        />
      </div>
    </div>
  );
};

export default Post;
