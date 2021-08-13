import Link from 'next/link';
import React from "react";
import style from './ClubRegisterForm.module.css';


const ClubRegisterForm = () => {
    return (
        <div className={style.register}>
            <div className={style.title}><h2>가입 신청</h2></div>
            <form className={style.userRegister}>
                <div className={style.inputfield}>
                    <label>이름</label>
                    <input type="text" />
                </div>
                <div className={style.inputfield}>
                    <label >학과</label>
                    <input type="text" />
                </div>
                <div className={style.sex}>
                      <label>성별</label>
                      <span><input type="radio" name="sex_info" value="남성"/>남성</span>
                      <span><input type="radio" name="sex_info" value="여성" />여성</span>
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
                <Link href="/ClubHome" passHref>
                    <button>신청</button>
                </Link>
           </div>
        </div> 
    )
}

export default ClubRegisterForm;
