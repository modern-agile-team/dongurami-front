import styles from "../../../styles/Club/Home/Common/frame.module.scss";
import SideBar from "./SideBar";
import ClubIntro from "../Intro/ClubIntro";
import Activities from "../Activities/Activities";
import Review from "../Review/Review";
import Calendar from "../Daily/Calendar";
import ClubNotice from "../Notice/ClubNotice";
import React, { useState } from "react";
import Modal from "../Activities/Modal";
import Apply from "../Apply/Apply";

const Frame = () => {
  const [comp, setComp] = useState(1);
  const [modalOpen, setModalOpen] = useState(false);
  const [imgURL, setImgURL] = useState("");

  const onModalOpen = (e) => {
    setImgURL(e.target.src);
    setModalOpen(true);
  };

  const onModalClose = () => {
    setModalOpen(false);
  };

  const Comp = () => {
    if (comp === 1) return <ClubIntro />;
    else if (comp === 2) return <ClubNotice />;
    else if (comp === 3) return <Activities onModalOpen={onModalOpen} />;
    else if (comp === 4) return <Calendar />;
    else if (comp === 5) return <Review />;
    else if (comp === 6) return <Apply />;
  };

  return (
    <>
      <div className={styles.container}>
        <SideBar setComp={setComp} comp={comp} />
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
