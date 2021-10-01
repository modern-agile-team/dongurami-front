import { FaPhoneAlt } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import styles from "../../../styles/Profile/ModifyInfo.module.scss";

const MutableData = ({ data, setEmail, setPhoneNumber }) => {
  return (
    <div className={styles.mutable}>
      <div className={styles.email}>
        <IoIosMail />
        <input
          placeholder={data.profile.email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
      </div>
      <div className={styles.phone}>
        <FaPhoneAlt />
        <input
          placeholder={data.profile.phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
        />
      </div>
    </div>
  );
};

export default MutableData;
