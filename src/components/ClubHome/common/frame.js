import styles from "../../../styles/Club/Home/Common/frame.module.scss";
import SideBar from "./SideBar";
import ClubIntro from "../ClubIntro";
import Activities from "../Activities";
import Review from "../Review";
import Calendar from "../Calendar";
import ClubNotice from "../ClubNotice";
import { useState } from "react";

const Frame = () => {
  const [comp, setComp] = useState(1);

  const Modal = () => {
    if (comp === 1) return <ClubIntro />;
    else if (comp === 2) return <Activities />;
    else if (comp === 3) return <Calendar />;
    else if (comp === 4) return <ClubNotice />;
    else if (comp === 5) return <div>자유게시판</div>;
    else if (comp === 6) return <Review />;
  };

  return (
    <>
      <SideBar comp={comp} setComp={setComp} />
      <div className={styles.wrap}>
        <Modal comp={comp} />
      </div>
    </>
  );
};

export default Frame;
