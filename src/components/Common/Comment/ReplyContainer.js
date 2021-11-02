import style from '../../../styles/Common/Comment/ReplyContainer.module.scss';
import { BsArrowReturnRight } from 'react-icons/bs';

function ReplyComment({ children }) {
  return (
    <div className={style.container}>
      <BsArrowReturnRight size={28} />
      {children}
    </div>
  );
}

export default ReplyComment;
