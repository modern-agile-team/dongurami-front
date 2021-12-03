import style from '../../../styles/Board/Promotion/ReplyCommentContainer.module.scss';
import { BsArrowReturnRight } from 'react-icons/bs';

function ReplyCommentContainer({ children }) {
  return (
    <div className={style.container}>
      <BsArrowReturnRight size={10} />
      {children}
    </div>
  );
}

export default ReplyCommentContainer;
