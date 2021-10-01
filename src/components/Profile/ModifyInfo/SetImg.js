import styles from "../../../styles/Profile/ModifyInfo.module.scss";

const SetImg = ({ setComp, comp }) => {
  if (comp === "이미지수정")
    return (
      <div>
        <button onClick={() => setComp("수정")}>adsf</button>
        <div>이미지서버, 업로드방식 정해지면 그때 구현</div>
      </div>
    );
  return null;
};

export default SetImg;
