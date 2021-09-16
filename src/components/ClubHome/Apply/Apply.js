import React, { useEffect, useState, useRef } from "react";
import ApplyHeader from "./ApplyHeader";
import styles from "../../../styles/Club/Home/Apply/Apply.module.scss";
import ApplyQuestions from "./ApplyQuestions";
import Additional from "./Additional";
import { IoIosAddCircleOutline, IoIosCheckmark } from "react-icons/io";
import axios from "axios";

const token = {
  studentID: 201708051,
};

const clubInfo = {
  name: "우아한 애자일",
  owner: "민순기",
  ownerID: 201708051,
  department: "컴퓨터전자공학과",
};

export const user = {
  name: "민순기",
  studentID: 201708051,
  department: "컴퓨터전자공학과",
};

const Apply = () => {
  const [userInfo, setUserInfo] = useState({
    grade: "",
    sex: "",
    phoneNumber: "",
  });
  const [newQuestion, setNewQuestion] = useState("");
  const [questions, setQuestions] = useState([]);
  const [isUpdate, setIsUpdate] = useState([]);
  const [resume, setResume] = useState([]);
  const [addQuestion, setAddQuestion] = useState([]);
  const [updateQuestion, setUpdateQuestion] = useState("");

  const { grade, sex, phoneNumber } = userInfo;

  const newQuestionInput = useRef();

  const iconSize = 40;

  // 질문 추가
  const onQuestionAdd = async () => {
    const options = {
      method: "POST",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbMV0sImlkIjoiMjAxNzA4MDUxIiwibmFtZSI6IiIsImVtYWlsIjoiYWxzdG5zcmw5OEBnbWFpbC5jb20iLCJwcm9maWxlUGF0aCI6bnVsbCwiaXNBZG1pbiI6MCwiaWF0IjoxNjMxNzEwMjczLCJleHAiOjE2MzE3OTY2NzMsImlzcyI6Indvb2FoYW4gYWdpbGUifQ.MkUGAY12I6epQ7YGO-BI_HjIJwei39-G6IXTjkH7zJ0",
      },
      data: {
        description: newQuestion,
      },
    };
    await axios("http://3.36.72.145:8080/api/club/application/1", options)
      .then((res) => console.log(res.data))
      .catch((err) => console.log(err.response.data));

    // GET
    await getApplyQuestions();

    // input 비우기
    newQuestionInput.current.value = "";
  };

  // 질문 제거
  const onRemove = async (i) => {
    const options = {
      method: "DELETE",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbMV0sImlkIjoiMjAxNzA4MDUxIiwibmFtZSI6IiIsImVtYWlsIjoiYWxzdG5zcmw5OEBnbWFpbC5jb20iLCJwcm9maWxlUGF0aCI6bnVsbCwiaXNBZG1pbiI6MCwiaWF0IjoxNjMxNzEwMjczLCJleHAiOjE2MzE3OTY2NzMsImlzcyI6Indvb2FoYW4gYWdpbGUifQ.MkUGAY12I6epQ7YGO-BI_HjIJwei39-G6IXTjkH7zJ0",
      },
      data: {
        description: newQuestion,
      },
    };
    await axios(`http://3.36.72.145:8080/api/club/application/1/${i}`, options)
      .then((res) => res.data)
      .catch((err) => alert(err.response.data));
    await getApplyQuestions();
  };

  // 질문 수정
  const onUpdateQuestionClick = async (i, no) => {
    const options = {
      method: "PUT",
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbMV0sImlkIjoiMjAxNzA4MDUxIiwibmFtZSI6IiIsImVtYWlsIjoiYWxzdG5zcmw5OEBnbWFpbC5jb20iLCJwcm9maWxlUGF0aCI6bnVsbCwiaXNBZG1pbiI6MCwiaWF0IjoxNjMxNzEwMjczLCJleHAiOjE2MzE3OTY2NzMsImlzcyI6Indvb2FoYW4gYWdpbGUifQ.MkUGAY12I6epQ7YGO-BI_HjIJwei39-G6IXTjkH7zJ0",
      },
      data: {
        description: updateQuestion,
      },
    };

    const update = isUpdate.map((el, index) => {
      return i === index ? !el : el;
    });

    if (isUpdate[i]) {
      await axios(
        `http://3.36.72.145:8080/api/club/application/1/${no}`,
        options
      )
        .then((res) => res.data)
        .catch((err) => alert(err.response.data.msg));
      await getApplyQuestions();
    }
    setIsUpdate(update);
  };

  // 질문 수정할 입력창
  const onUpdateInputChange = (e) => {
    setUpdateQuestion(e.target.value);
  };

  // 질문 입력창 변화 감지
  const handleChange = (e) => {
    setNewQuestion(e.target.value);
  };

  // 학년
  const onGradeChange = (e) => {
    const { name, value } = e.target;
    setUserInfo({ ...userInfo, [name]: value });
    console.log(userInfo);
  };

  // 지원서 제출
  const onResumeSubmit = () => {
    const result = [
      user.name,
      user.studentID,
      user.department,
      grade,
      sex,
      phoneNumber,
      ...addQuestion,
    ];
    setResume(result);
  };

  // 추가 질문 저장
  const onQuestionInputChange = (e) => {
    const index = e.target.parentNode.id;
    const input = e.target.value;
    const temp = [...addQuestion];
    temp[index] = input;
    setAddQuestion(temp);
  };

  // 지원서 불러오기
  const getApplyQuestions = async () => {
    const options = {
      headers: {
        "Content-type": "application/json; charset=utf-8",
        "x-auth-token":
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjbHViTnVtIjpbMV0sImlkIjoiMjAxNzA4MDUxIiwibmFtZSI6IiIsImVtYWlsIjoiYWxzdG5zcmw5OEBnbWFpbC5jb20iLCJwcm9maWxlUGF0aCI6bnVsbCwiaXNBZG1pbiI6MCwiaWF0IjoxNjMxNzEwMjczLCJleHAiOjE2MzE3OTY2NzMsImlzcyI6Indvb2FoYW4gYWdpbGUifQ.MkUGAY12I6epQ7YGO-BI_HjIJwei39-G6IXTjkH7zJ0",
      },
    };
    await axios
      .get("http://3.36.72.145:8080/api/club/application/1", options)
      .then((res) => {
        const updateState = new Array(res.data.questions.length).fill(false);
        setIsUpdate(updateState);
        setQuestions(res.data.questions);
      })
      .catch((err) => alert(err.response.data.msg));
  };

  useEffect(() => {
    getApplyQuestions();
  }, []);

  return (
    <div className={styles.container}>
      <ApplyHeader />
      <ApplyQuestions
        onUserInfoChange={onGradeChange}
        onUserInfoChange={onGradeChange}
        onUserInfoChange={onGradeChange}
      />
      <Additional
        onQuestionInputChange={onQuestionInputChange}
        isUpdate={isUpdate}
        onUpdate={onUpdateQuestionClick}
        onRemove={onRemove}
        questions={questions}
        onUpdateInputChange={onUpdateInputChange}
      />
      <div
        className={
          token.studentID === clubInfo.ownerID ? styles.add : styles.none
        }
      >
        <span>새로운 질문</span>
        <input ref={newQuestionInput} type="text" onChange={handleChange} />
        <IoIosAddCircleOutline onClick={onQuestionAdd} size={iconSize} />
      </div>
      <div className={styles.submit}>
        <IoIosCheckmark size={iconSize} onClick={onResumeSubmit} />
      </div>
    </div>
  );
};

export default Apply;
