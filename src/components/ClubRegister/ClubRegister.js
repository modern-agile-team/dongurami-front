import style from "../../styles/Club/Resister/ClubRegister.module.sass";
import ClubRegisterForm from "./ClubRegisterForm";

const ClubRegister = () => {
  return (
    <div className={style.container}>
      <ClubRegisterForm />
    </div>
  );
};

export default ClubRegister;
