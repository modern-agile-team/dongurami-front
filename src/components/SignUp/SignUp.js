import styles from './SignUp.module.css'
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
  <div className={styles.container}>
    <SignUpForm />
  </div>
  );
}

export default SignUp;
