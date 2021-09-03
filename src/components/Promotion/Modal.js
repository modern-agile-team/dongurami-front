import React from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import { MdClose } from "react-icons/md";
import { CgProfile } from "react-icons/cg";


const Modal = ({ value, setOpenModal }) => {
    return (
        <div className={styles.background}>
            <MdClose className={styles.close} onClick={() => setOpenModal(false)}/>
            <div className={styles.image}>
                <img src={value} />
            </div>
            <div className={styles.post}>
                  <h3>🖤CFM 수화찬양 동아리🖤</h3>
                <article>
                 🖤CFM 이란?🖤
                  <br />
                  <br /> 1 수어를 배울 수 있는 모임
                  <br />
                  <br /> 청각장애인의 의사소통 언어인 수화를 배우면서
                  <br /> 청각장애인을 공감 할 수 있는 기회를 가질 수 있습니다
                  <br /> 수어를 통해 봉사를 하며 정기적인 공연도 하고 있습니다!!
                  <br />
                  <br />2 정기적인 예배와 모임
                  <br />
                  <br /> 하나님을 찬양하며 예배드리는 시간을 갖습니다 예배를 통해 
                  <br /> 진정한 삶과 사랑에 대한 가치를 알려드리고 있습니다 
                  <br /> 예배시간은 20 ~ 30분 정도의 길지 않은 예배를 드립니다
                  <br /> 모이는 교회는 성서침례교회로 독림 침례교회이며 1954년 미국의
                  <br /> 표수다(Foster) 선교사님이 설립하신 근본주의 침례교회입니다.
                  <br /> 신천지, 구원파, 이단 등과 절대 무관합니다!!
                  <br />
                  <p><u>CFM 홈페이지 바로가기</u></p>
                  <br />
                  <hr />
                </article>
                <div className={styles.commentTittle}>
                    <h4>댓글</h4>
                    <hr />
                </div>
                <div className={styles.writeComment}> 
                     <div className={styles.writer}>
                        <CgProfile className={styles.profile} />
                        <span>유준상</span>
                        <button>등록</button>
                     </div>
                     <textarea placeholder="댓글을 남겨주세요" />
                     <hr />
                </div>
                 <div className={styles.commentContainer}>
                    <div className={styles.writer}>
                        <CgProfile className={styles.profile} />
                        <span>유준상</span>
                    </div>
                    <div className={styles.comment}>
                        <span>굴전으로 2행시 해주세요</span>
                        <div className={styles.commentInfo}>
                            <span>2021-09-02</span>
                            <span>답글 쓰기</span>    
                        </div>
                    </div>
                    <hr /> 
                 </div>
            </div>
        </div>
    );
}

export default Modal;