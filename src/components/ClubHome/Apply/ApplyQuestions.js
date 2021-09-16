import React from "react";
import styles from "../../../styles/Club/Home/Apply/ApplyQuestions.module.scss";
import { user } from "./Apply";

const ApplyQuestions = ({ onGradeChange, onSexChange, onPhoneNumberInput }) => {
  return (
    <div className={styles.questions}>
      <ul>
        <li>
          <span>이름</span>
          <p id="name">{user.name}</p>
        </li>
        <li>
          <span>학번</span>
          <p id="studentID">{user.studentID}</p>
        </li>
        <li>
          <span>학과</span>
          <p id="department">{user.department}</p>
        </li>
        <li>
          <span>학년</span>
          <br />
          <select name="학년" id="grade" onChange={onGradeChange}>
            <option value="선택 안함">선택</option>
            <option value="1학년">1학년</option>
            <option value="2학년">2학년</option>
            <option value="3학년">3학년</option>
          </select>
        </li>
        <li>
          <span>성별</span>
          <br />
          <select name="성별" id="sex" onChange={onSexChange}>
            <option value="선택 안함">선택</option>
            <option value="남자">남자</option>
            <option value="여자">여자</option>
          </select>
        </li>
        <li>
          <span>휴대전화</span>
          <br />
          <input
            type="text"
            placeholder="전화번호 ( - 제외 )"
            id="phone"
            onChange={onPhoneNumberInput}
          />
        </li>
      </ul>
    </div>
  );
};

export default ApplyQuestions;
