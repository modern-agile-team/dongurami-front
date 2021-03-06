import React from 'react';
import styles from 'styles/Club/Home/Manager/ApproveList.module.scss';
import { AiOutlineUserAdd, AiOutlineUserDelete } from 'react-icons/ai';

const ApproveInfo = ({ info, index, onApplyAccept, onApplyReject, QNA }) => {
  const sex = info.gender === 1 ? '남' : '여';
  return (
    <>
      <div className={styles.applierInfo}>
        <div>
          <span>이름</span>
          <p>
            {info.name} [{sex}]
          </p>
        </div>
        <div>
          <span>학과</span>
          <p>
            {info.major} [{info.grade}학년]
          </p>
        </div>
        <div>
          <span>학번</span>
          <p>{info.id}</p>
        </div>
        <div>
          <span>전화번호</span>
          <p>{info.phoneNum}</p>
        </div>
        {QNA &&
          QNA.map((qna, i) => {
            return (
              <div key={i}>
                <span>{qna.question}</span>
                <p>{qna.answer}</p>
              </div>
            );
          })}
        <div className={styles.acceptOrDel}>
          <AiOutlineUserAdd id={index} onClick={onApplyAccept} />
          <AiOutlineUserDelete id={index} onClick={onApplyReject} />
        </div>
      </div>
    </>
  );
};

export default ApproveInfo;
