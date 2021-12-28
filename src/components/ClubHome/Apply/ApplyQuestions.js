import React from 'react';
import styles from '../../../styles/Club/Home/Apply/ApplyQuestions.module.scss';

const ApplyQuestions = ({ onUserInfoChange, userInfo }) => {
  const [male, female] = [1, 2];
  return (
    <div className={styles.questions}>
      <ul>
        <li>
          <span>이름</span>
          <p id="name">{userInfo.name}</p>
        </li>
        <li>
          <span>학번</span>
          <p id="studentID">{userInfo.id}</p>
        </li>
        <li>
          <span>학과</span>
          <p id="department">{userInfo.major}</p>
        </li>
        <li>
          <span>학년</span>
          <br />
          <select
            name="grade"
            id="grade"
            onChange={onUserInfoChange}
            value={userInfo.grade || 0}
          >
            <option value={0}>선택</option>
            <option value={1}>1학년</option>
            <option value={2}>2학년</option>
            <option value={3}>3학년</option>
            <option value={4}>4학년 (전공심화)</option>
          </select>
        </li>
        <li>
          <span>성별</span>
          <br />
          <select
            value={userInfo.sex || 0}
            name="sex"
            id="sex"
            onChange={onUserInfoChange}
          >
            <option value={0}>선택</option>
            <option value={male}>남자</option>
            <option value={female}>여자</option>
          </select>
        </li>
        <li>
          <span>휴대전화</span>
          <br />
          <input
            name="phoneNumber"
            type="text"
            placeholder="전화번호 ( - 제외 )"
            id="phone"
            defaultValue={userInfo.phoneNumber}
            onChange={onUserInfoChange}
          />
        </li>
      </ul>
    </div>
  );
};

export default ApplyQuestions;
