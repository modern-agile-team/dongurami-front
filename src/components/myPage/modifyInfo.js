import { useState } from 'react';
import styles from '../../styles/User/MyPage/modifyInfo.module.scss';
import { FiSettings, FiUser } from 'react-icons/fi'

const ModifyInfo = () => {
  const userData = {
    img : 'https://avatars.githubusercontent.com/u/77265494?s=200&v=4',
    name : '박현우',
    department : '정보통신공학과'
  }
  const [input, setInput] = useState(false);

  return (
    <>
      <div className={styles.wrap}>
        <div className={styles.header}>
          <FiUser className={styles.user} />
          <FiSettings />
        </div>
        <input type='text' placeholder='심서현'/>
        <hr/>
        <form>
          <label>학과</label><br/>
          <select>
            <option value=''>학과선택</option>
            <option value='ㅇㅇ과'>ㅇㅇ과</option>
            <option value='ㅁㅁ과'>ㅁㅁ과</option>
            <option value='ㄷㄷ과'>ㄷㄷ과</option>
            <option value='ㄴㄴ과'>ㄴㄴ과</option>
          </select>
        </form><br/>
        <p>소속동아리</p><br/>
        <span>우아한 애자일</span>
      </div>
      <div>
        <button className={styles.button}>수정</button>
      </div>
    </>
  )
}

export default ModifyInfo;