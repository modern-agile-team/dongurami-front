import styles from "./SignUp.module.sass";
import SignUpForm from "./SignUpForm";

function SignUp() {
  return (
    <div className={styles.container}>
      <SignUpForm />
    </div>
  );
}

export default SignUp;
