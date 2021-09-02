import Link from 'next/link';
import styles from '../../styles/User/SignUp/SignUpForm.module.scss';

function SignUpForm() {
  return (
    <form className={styles.form}>
      <h1>회원가입</h1>
      <input className={styles.input} type="text" placeholder="이름" />
      <input className={styles.input} type="number" placeholder="학번" />
      <select className={styles.select}>
        <option>학과 선택</option>
        <option>정보통신학과</option>
        <option>컴퓨터소프트웨어학과</option>
        <option>컴퓨터전자공학과</option>
      </select>
      <input className={styles.input} type="email" placeholder="이메일" />
      <input className={styles.input} type="password" placeholder="비밀번호" />
      <input className={styles.input} type="password" placeholder="비밀번호 확인" />
      <Link href="/LoginPage" passHref>
        <input className={styles.button} type="submit" value="가입하기" />
      </Link>
    </form>
  );
}

export default SignUpForm;
