import { useState } from 'react';
import styles from './modifyInfo.module.sass';
import { ImUser } from 'react-icons/im';

const ModifyInfo = () => {
  const [input, setInput] = useState(false);

  return (
    <div className={styles.wrap}>
      <div className={styles.wrap}>
          <ImUser className={styles.icon} /> &nbsp;
          <span>수정</span>
          {input ? (
            <div>
              <input>수정할 내용</input>
              <button>수정</button>
            </div>
          ) : null}
          <h4>심서현</h4> 
          <p>컴퓨터전자공학과</p>
          <ul>
            소속 동아리<br/>
            <li><span>우아한 애자일</span></li>
          </ul>
          <a>개인정보 수정</a>
          <button>X</button>
        </div>
    </div>
  )
}

export default ModifyInfo;