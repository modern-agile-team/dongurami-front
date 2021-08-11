import styles from './frame.module.sass';
import SideBar from './SideBar';
import ClubIntro from '../ClubIntro';
import { useState } from 'react'

const Frame = () => {
  const [comp, setComp] = useState(1)

  const Modal = () => {
    if (comp === 1) return <ClubIntro />
    else if (comp === 2) return <div>활동내용</div>
    else if (comp === 3) return <div>일정관리</div>
    else if (comp === 4) return <div>공지게시판</div>
    else if (comp === 5) return <div>동아리 후기</div>
  }

  return (
    <div className={styles.wrap}>
      <SideBar  comp={comp} setComp={setComp}/>
      <Modal comp={comp} />
    </div>
  )
}

export default Frame;
