import styles from "./SignUp.module.sass";
import SignUpForm from "../../styles/User/SignUp/SignUpForm";

function SignUp() {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
