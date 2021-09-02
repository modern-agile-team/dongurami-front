import Link from 'next/link';
import styles from '../../styles/User/Login/Login.module.scss';

export const Login = () => {
    return (
        <div className={styles.login}>
            <div className={styles.body}>
                <h1>로그인</h1>
                <input className={styles.idInput} 
                    type='text' 
                    placeholder='아이디를 입력해 주세요.'
                />
                <input className={styles.pwInput} 
                    type='password' 
                    placeholder='비밀번호를 입력해 주세요.' 
                />
            </div>
            <div className={styles.find}>
                <Link href="/findAuth" passHref>
                    <span className={styles.findID}>
                        아이디 찾기
                    </span>
                </Link>
                <Link href="/findAuth" passHref>
                    <span className={styles.findPW}>
                        비밀번호 찾기
                    </span>
                </Link>
            </div>
            <div className={styles.buttons}>
                <Link href="/" passHref>
                    <button className={styles.loginBtn}>로그인</button>
                </Link>
                <Link href="signup" passHref>
                    <button>회원가입</button>
                </Link>
            </div>
        </div>
    )
}

export default Login;
