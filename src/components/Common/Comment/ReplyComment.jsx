import style from '../../../styles/Common/Comment/ReplyComment.module.scss';
import Comment from './Comment';
import { BsArrowReturnRight } from 'react-icons/bs';

function ReplyComment() {
  return (
    <div className={style.container}>
      <BsArrowReturnRight />
      <Comment />
    </div>
  );
}

export default ReplyComment;
