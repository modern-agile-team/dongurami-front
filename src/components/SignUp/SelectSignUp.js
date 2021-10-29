import React from 'react';
import styles from '../../styles/User/SignUp/SelectSignUp.module.scss';
import OAuth from './OAuth';
import Link from 'next/link';

export const SelectSignUp = () => {
  return (
    <div className={styles.container}>
      <div className={styles.explain}>
        <span>
          저희 &#39;동그라미&#39; 서비스는 인덕대학교 학생들의 동아리 활동에
          원활한 소통과 교류가 이루어지도록 개발된 서비스입니다.
        </span>
        <br />
        <span>
          학생분들의 소통이 주 서비스가 됨에 따라, 실명 제도를 원칙으로 하여
          운영되고 있습니다.
        </span>
        <br />
        <h2>가입 시 이용 가능한 서비스</h2>
        <ul>
          <li>각 동아리 홈 열람</li>
          <li>동아리 가입신청 및 동아리 가입</li>
          <li>동아리 후기 작성 (동아리 원에 한함)</li>
          <li>가입된 동아리 일정 조회</li>
          <li>게시글 작성 및 댓글 작성</li>
        </ul>
        <span>
          회원가입 시 기입한 이름 란은 본인의 활동 닉네임과 동일하며, 차후
          동아리 가입 신청 시 가입된 이름으로 가입신청이 가능하다는 점 유의해
          주시길 바랍니다.
        </span>
        <div className={styles.naverInfo}>
          <span>
            아래의 &#39;네이버 아이디로 로그인&#39; 서비스를 이용하시면 보다
            편한 회원가입이 가능하니 참고하여 이용해 주시면 감사하겠습니다.
          </span>
        </div>
        <hr />
        <div className={styles.selectBtn}>
          <OAuth />
          <Link href="/signup" passHref>
            <button>이메일로 회원가입하기</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SelectSignUp;
