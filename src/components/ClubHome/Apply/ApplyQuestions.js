import React from "react";
import styles from "../../../styles/Club/Home/Apply/ApplyQuestions.module.scss";

const ApplyQuestions = () => {
  return (
    <div className={styles.questions}>
      <ul>
        <li>
          <span>이름</span>
          <p id="name">민순기</p>
        </li>
        <li>
          <span>학번</span>
          <p id="studentID">201708051</p>
        </li>
        <li>
          <span>학과</span>
          <p id="department">컴퓨터전자공학과</p>
        </li>
        <li>
          <span>학년</span>
          <br />
          <select name="학년" id="grade">
            <option value="1">1학년</option>
            <option value="2">2학년</option>
            <option value="3">3학년</option>
          </select>
        </li>
        <li>
          <span>성별</span>
          <br />
          <select name="성별" id="sex">
            <option value="male">남자</option>
            <option value="female">여자</option>
          </select>
        </li>
        <li>
          <span>휴대전화</span>
          <br />
          <input type="text" placeholder="전화번호 ( - 제외 )" id="phone" />
        </li>
      </ul>
    </div>
  );
};

export default ApplyQuestions;
