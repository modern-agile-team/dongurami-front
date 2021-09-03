import styles from '../../styles/Board/Post/PostContent.module.scss';
import CommentContainer from '../Common/Comment/CommentContainer';

function PostContent() {
  return (
    <div className={styles.container}>
      <div>
        <div>공지 게시판</div>
        <div>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</div>
        <div>
          <div>관리자 관리자</div>
          <div>
            <div>21-08-27</div>
            <div>조회 99999</div>
          </div>
        </div>
      </div>
      <hr />
      <div>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque est
        accusantium placeat fugiat hic consectetur saepe eveniet nam odit.
        Accusantium sequi molestias maxime similique temporibus, beatae
        cupiditate iste asperiores debitis.
      </div>
      <CommentContainer />
    </div>
  );
}

export default PostContent;
