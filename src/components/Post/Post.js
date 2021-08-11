import React from "react";
import CommentContainer from "../Common/Comment/CommentContainer";
import Header from "../Common/Header";
import PostDesc from "./PostDesc";
import PostHeader from "./PostHeader";

function Posts() {
  return (
    <>
      <Header />
      <PostHeader />
      <PostDesc />
      <CommentContainer />
    </>
  );
}

export default Posts;
