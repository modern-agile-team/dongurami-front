import styles from 'styles/Board/Promotion/Post/Header.module.scss';
import Link from 'next/link';
import { IoIosArrowForward } from 'react-icons/io';
import moment from 'moment';
import Option from 'components/Common/letter/Option';

const Header = ({
  title,
  user,
  studentId,
  hit,
  onClick,
  clubName,
  post,
  openOptions,
  inDate,
  setOpenOptions,
  isComment,
  setOpenMessage,
  name,
  onDelete,
  router
}) => {
  return (
    <div className={styles.header}>
      <div className={styles.title}>
        <h1>{title}</h1>
        <div className={styles.info}>
          {user?.id === studentId && (
            <div className={styles.buttons}>
              <Link
                href={{
                  pathname: `${router.pathname}/${router.query.id}/edit`
                }}
                passHref
              >
                <button>수정</button>
              </Link>
              <button onClick={onDelete}>삭제</button>
            </div>
          )}
          <span className={styles.hit}>조회 {hit}</span>
        </div>
      </div>
      <div className={styles.infoWrap}>
        <div className={styles.club} onClick={onClick}>
          <span>{clubName} 바로가기</span>
          <IoIosArrowForward size={25} />
        </div>
        <div className={styles.boardInfo}>
          <div className={styles.profile}>
            <img
              onClick={() => setOpenOptions(!openOptions)}
              src={
                post.profileImageUrl ??
                'https://blog.kakaocdn.net/dn/c3vWTf/btqUuNfnDsf/VQMbJlQW4ywjeI8cUE91OK/img.jpg'
              }
              alt="profile"
            />
            {openOptions && !isComment && (
              <Option
                setOpenOptions={setOpenOptions}
                setOpenMessage={setOpenMessage}
                routePath={`/profile/${post.studentId}`}
                isPost
              />
            )}
            <span onClick={() => setOpenOptions(!openOptions)}>{name}</span>
          </div>
          <div className={styles.dateHit}>
            <span>{moment(inDate).format('YYYY-MM-DD')}</span>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Header;
