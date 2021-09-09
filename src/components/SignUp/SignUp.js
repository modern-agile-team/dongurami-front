import styles from '../../styles/User/SignUp/SignUp.module.scss'
import SignUpForm from './SignUpForm';
import Footer from "../Common/Footer";

function SignUp() {
  return (
  <div className={styles.container}>
    <SignUpForm />
    <Footer />
  </div>
  );
}

export default SignUp;
