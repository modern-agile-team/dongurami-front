import { useState } from 'react';
import styles from '../../styles/User/MyPage/modifyInfo.module.scss';
import { FiSettings, FiUser } from 'react-icons/fi'
import Rouer from 'next/router'

const ModifyInfo = () => {
  const userData = {
    img : 'https://avatars.githubusercontent.com/u/77265494?s=200&v=4',
    name : '박현우',
    department : '정보통신공학과'
  }
  const [input, setInput] = useState(false);

  return (
    <div className={styles.back}>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <FiUser className={styles.user} />
        </div>
        <span className={styles.setting}>프로필 사진 변경</span>
        <input type='text' placeholder='박현우' className={styles.input}/>
        <hr/>
        <label>학과</label><br/>
        <select>
          <option value=''>학과선택</option>
          <option value='ㅇㅇ과'>ㅇㅇ과</option>
          <option value='ㅁㅁ과'>ㅁㅁ과</option>
          <option value='ㄷㄷ과'>ㄷㄷ과</option>
          <option value='ㄴㄴ과'>ㄴㄴ과</option>
        </select><br/>
        <p>소속동아리</p><br/>
        <span>우아한 애자일</span>
      </div>
      <div>
        <button className={styles.button} onClick={() => {}}>완료</button>
      </div>
    </div>
  )
}

export default ModifyInfo;