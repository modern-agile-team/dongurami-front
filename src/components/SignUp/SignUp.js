import styles from '../../styles/User/SignUp/SignUp.module.scss'
import SignUpForm from './SignUpForm';

function SignUp() {
  return (
  <div className={styles.container}>
    <SignUpForm />
  </div>
  );
}

export default SignUp;
