import styles from './frame.module.sass';
import SideBar from './SideBar';
import ClubIntro from '../ClubIntro';
import Activities from '../Activities';
import Review from '../Review';
import Calendar from '../Calendar';
import { useState } from 'react'

const Frame = () => {
  const [comp, setComp] = useState(1)

  const Modal = () => {
    if (comp === 1) return <ClubIntro />
    else if (comp === 2) return <Activities />
    else if (comp === 3) return <Calendar />
    else if (comp === 4) return <div>공지게시판</div>
    else if (comp === 5) return <div>자유게시판</div>
    else if (comp === 6) return <Review />
  }

  return (
    <div className={styles.wrap}>
      <SideBar  comp={comp} setComp={setComp}/>
      <Modal comp={comp} />
    </div>
  )
}

export default Frame;
