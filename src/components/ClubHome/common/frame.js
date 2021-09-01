import styles from "../../../styles/Club/Home/Common/frame.module.scss";
import SideBar from "./SideBar";
import ClubIntro from "../Intro/ClubIntro";
import Activities from "../Activities/Activities";
import Review from "../Review/Review";
import Calendar from "../Calendar";
import ClubNotice from "../ClubNotice";
import { useState } from "react";
import Modal from "../Activities/Modal";

const Frame = () => {
  const [comp, setComp] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgURL, setImgURL] = useState("");
  const onClick = (e) => {
    setImgURL(e.target.src);
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };
  const Comp = () => {
    if (comp === 1) return <ClubIntro />;
    if (comp === 2) return <ClubNotice />;
    if (comp === 3) return <Activities onClick={onClick} />;
    if (comp === 4) return <Calendar />;
    if (comp === 5) return <Review />;
    if (comp === 6) return <div>자유게시판</div>;
  };
  return (
    <>
      <div className={styles.container}>
        <div className={styles.sidebar}>
          <SideBar setComp={setComp} comp={comp} />
        </div>
        {modalOpen ? (
          <Modal imgURL={imgURL} setImgURL={setImgURL} onClose={onModalClose} />
        ) : (
          false
        )}
        <div className={styles.wrap}>
          <Comp comp={comp} />
        </div>
      </div>
    </>
  );
};

export default Frame;
