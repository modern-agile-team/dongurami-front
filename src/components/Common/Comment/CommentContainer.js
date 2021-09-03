import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from "./Comment";
import AddComment from './AddComment';
import ReplyComment from './ReplyComment';


function CommentContainer() {
  return (
    <>
      <p>댓글 3</p>
      <hr />
      <div className={style.container}>
        <Comment />
        <ReplyComment />
        <Comment />
        <AddComment />
      </div>
    </>
  );
}

export default CommentContainer;
