import styles from '../../styles/User/Find/FindID.module.scss';
import Link from 'next/link';

export const FindID = () => {
    return (
        <div className={styles.wrap}>
            <div className={styles.find}>
                <div className={styles.body}>
                    <h1>아이디 찾기</h1>
                    <input className={styles.name} 
                        type='text' 
                        placeholder='이름'
                    />
                    <input className={styles.email} 
                        type='text' 
                        placeholder='이메일' 
                    />
                </div> 
                <div className={styles.findPW}>
                    <Link href="/findPW" passHref>
                        <span>비밀번호 찾기</span>
                    </Link>
                </div> 
                <div>
                    <Link href="/" passHref>
                        <button>아이디 찾기</button>
                    </Link>
                </div>
            </div>
        </div>
    )
}

export default FindID;