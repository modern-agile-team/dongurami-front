import React from "react";
import styles from "../../styles/Board/Post/PostDesc.module.scss";
import { CgProfile } from "react-icons/cg";
function PostDesc() {
  return (
    <article className={styles.postDesc}>
      <div className={styles.profile}>
        <CgProfile size={50} />
        <h3>민순기</h3>
      </div>
      <p>
        ● 마켓 (구매자)
        <br /> 1. 회원가입 후 로그인
        <br /> 2. 거래 장터에 원하는 카테고리 접속 <br />
        3. 거래를 원하는 게시글 접속 <br />
        4. 게시글에 댓글 작성하여 거래 진행
        <br />
        <br /> ● 마켓 (판매자) <br />
        1. 회원가입 후 로그인 <br />
        2. 자신이 판매할 제품에 맞는 카테고리 접속 <br />
        3. 제목, 희망가격, 1장 이상의 이미지를 첨부하여 게시글 작성 <br />
        4. 현재 자신의 게시글의 거래 상태에 맞게 판매 중, 예약 중, 거래 완료를
        선택한다. <br />
        5. 거래 완료를 선택하게 되면 댓글을 작성한 사람 즉, 구매 요청자 목록이
        나온다. 그중 거래를 완료한 사람을 선택한다.
        <br />
        <br /> ● 자유게시판 <br />- 다른 사용자들과 자유롭게 얘기를 주고받을 수
        있는 공간
        <br />
        <br /> ● 문의사항 <br />- IDU 마켓을 이용하면서 불편했던 점, 버그 등을
        관리자에게 문의하는 공간
      </p>
    </article>
  );
}

export default PostDesc;
