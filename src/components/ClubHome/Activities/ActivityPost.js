import Post from "components/Post/Post";
import { useEffect, useMemo, useState } from "react";
import styles from 'styles/Club/Home/Activities/ActivityPost.module.scss';

class Api {
  constructor(setPost) {
    this.setPost = setPost;
    this.updatePost();
  }

  updatePost() {
    const post = this.getPost();
    this.setPost(post);
  }

  getPost() {
    return {
      success: true,
      msg: "게시글 조회 성공",
      userInfo: "비로그인 회원입니다.",
      board: {
        no: 163,
        studentId: "test1",
        name: "test1",
        title: "asdf",
        description: "<p>asdf</p><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>pp",
        clubName: "우아한 애자일",
        category: "IT",
        inDate: "2021-09-17 11:25:57",
        modifyDate: "2021-09-17 11:25:57",
        hit: 78,
      },
      images: [],
      comments: [
        {
          studentId: "123456789",
          studentName: "창훈창훈",
          no: 324,
          description: "ㄷㄲㄷㄱㄷㄱㄷ",
          depth: 0,
          groupNo: 324,
          replyFlag: 0,
          inDate: "2021-09-30 14:30:26",
          modifyDate: "2021-09-30 14:30:26",
          profileImageUrl: null,
          profileImageName: null,
        },
        {
          studentId: "123456789",
          studentName: "창훈창훈",
          no: 333,
          description: "asdfasdf",
          depth: 0,
          groupNo: 333,
          replyFlag: 0,
          inDate: "2021-09-30 15:02:38",
          modifyDate: "2021-09-30 15:02:38",
          profileImageUrl: null,
          profileImageName: null,
        },
      ],
    };
  }
}

function ActivityPost() {
  const [post, setPost] = useState();
  const api = useMemo(() => new Api(setPost), []);

  useEffect(() => {
    api.updatePost();
  }, [api]);

  return (
    <div className={styles.container}>
      <Post post={post}></Post>
    </div>
  )
}

export default ActivityPost;
