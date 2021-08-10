import React from "react";
import style from './ClubRegister.module.css';


const ClubRegister = () => {
    return (
        <div className="register">
            <div className={style.title}><h2>가입 신청</h2></div>
            <form className={style.userRegister}>
                <div className={style.inputfield}>
                    <label>이름</label>
                    <input type="text" />
                </div>
                <div className={style.inputfield}>
                    <label>학과</label>
                    <input type="text" />
                </div>
                <div className={style.sex}>
                      <label>성별</label>
                      <span><input type="radio" />남성</span>
                      <span><input type="radio" />여성</span>
                </div>
                <div className={style.inputfield}>
                    <label>전화번호</label>
                    <input type="text" />
                </div>
                <div className={style.inputfield}>
                    <label>나이</label>
                    <input type="text" />
                </div>
                <div className={style.free}>
                    <label>자유양식</label>
                    <textarea />
                </div>
           </form>
           <div className={style.btn}>
               <button>신청</button>
           </div>
        </div> 
    )
}

export default ClubRegister;