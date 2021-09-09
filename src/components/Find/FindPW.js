import styles from '../../styles/User/Find/FindPW.module.scss';
import Link from 'next/link';

export const FindPW = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.find}>
                <div className={styles.body}>
                    <h1>비밀번호 찾기</h1>
                    <input className={styles.num} 
                        type='text' 
                        placeholder='학번'
                    />
                    <input className={styles.email} 
                        type='text' 
                        placeholder='이메일' 
                    />
                </div> 
                <div className={styles.findID}>
                    <Link href="/findID" passHref>
                        <span>아이디 찾기</span>
                    </Link>
                </div> 
                <div>
                    <Link href="/" passHref>
                        <button>비밀번호 찾기</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FindPW;  