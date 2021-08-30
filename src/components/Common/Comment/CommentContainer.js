import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from "./Comment";
import AddComment from './AddComment';


function CommentContainer() {
  return (
    <div className={style.container}>
      <Comment />
      <Comment />
      <Comment />
      <AddComment />
    </div>
  );
}

export default CommentContainer;
