import { useState } from 'react';
import styles from '../../styles/User/MyPage/modifyInfo.module.scss';

const ModifyInfo = () => {
  const userData = {
    img : 'https://avatars.githubusercontent.com/u/77265494?s=200&v=4',
    name : '박현우',
    department : '정보통신공학과'
  }
  const [input, setInput] = useState(false);

  return (
    <div className={styles.container}>
      <img src={userData.img} />
      <p>사진옆에 쪼마난 연필같은 아이콘으로 수정 기능 추가할 예정</p>
      <form>
        <label>이름 : {userData.name}</label><br/>
        <input type='text' placeholder='변경할 이름을 입력해 주세요.'/>
        <button>수정</button>
      </form>
      <form>
        <label>학과 : {userData.department}</label><br/>
        <select>
          <option value=''>학과선택</option>
          <option value='ㅇㅇ과'>ㅇㅇ과</option>
          <option value='ㅁㅁ과'>ㅁㅁ과</option>
          <option value='ㄷㄷ과'>ㄷㄷ과</option>
          <option value='ㄴㄴ과'>ㄴㄴ과</option>
        </select>
        <button>수정</button>
      </form><br/>
      <span>아이디 / 비밀번호 변경</span><br/>
      <div>
        <button>완료</button> &nbsp;
        <button>닫기</button>
      </div>
    </div>
  )
}

export default ModifyInfo;