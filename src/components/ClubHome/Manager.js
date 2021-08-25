import React from 'react';
import styles from '../../styles/Club/Home/Manager/Manager.module.scss';

export const Manager = () => {
    return (
        <div className={styles.manager}>
            <header>
                <h1>동아리원 관리</h1>
                <h3>총 10명</h3>
            </header>
            <hr />
            <div className={styles.top}>
                <h3>직급</h3>
                <h3>이름</h3>
                <h3>가입 신청 관리</h3>
                <h3>게시글 편집</h3>
            </div>
            <div className={styles.first}>
                <select>
                    <option value=''>직급선택</option>
                    <option value='회장'>회장</option>
                    <option value='부회장'>부회장</option>
                    <option value='동아리원'>동아리원</option>
                </select>
                <span>오창훈</span>
                <input type='checkBox' className={styles.appManage}/>
                <input type='checkBox' className={styles.boardManage}/>
            </div>
            <div className={styles.second}>
                <select>
                    <option value=''>직급선택</option>
                    <option value='회장'>회장</option>
                    <option value='부회장'>부회장</option>
                    <option value='동아리원'>동아리원</option>
                </select>
                <span>민순기</span>
                <input type='checkBox' className={styles.appManage}/>
                <input type='checkBox' className={styles.boardManage}/>
            </div>
            <div className={styles.third}>
                <select>
                    <option value=''>직급선택</option>
                    <option value='회장'>회장</option>
                    <option value='부회장'>부회장</option>
                    <option value='동아리원'>동아리원</option>
                </select>
                <span>심서현</span>
                <input type='checkBox' className={styles.appManage}/>
                <input type='checkBox' className={styles.boardManage}/>
            </div>
            <hr />
            <button className={styles.addBtn}>수정</button>
        </div>
    )
}

export default Manager;