import styles from './Login.module.css';

export const Login = () => {
    return (
        <div className={styles.login}>
            <body className={styles.loginBody}>
                <h1 className={styles.loginTitle}>
                    Login
                    </h1>
                <input className={styles.idInput} 
                    type='text' 
                    placeholder='아이디를 입력해 주세요.'
                />
                <input className={styles.pwInput} 
                    type='password' 
                    placeholder='비밀번호를 입력해 주세요.' 
                />
                <button className={styles.loginSubmit}>
                    Login
                    </button>
            </body>
           <footer className={styles.loginFotter}>
                <span className={styles.findIDPW}>
                    아이디/비밀번호 찾기
                    </span>
                <span className={styles.signUp}>
                    회원가입
                    </span>
           </footer>
        </div>
    )
}

export default Login;