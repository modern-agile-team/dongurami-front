import style from '../../../styles/Common/Comment/CommentContainer.module.scss';
import Comment from "./Comment";
import AddComment from './AddComment';
import ReplyContainer from './ReplyContainer';
import { useState } from 'react';

const comments = ['test', 'lorem ipsum', 'afdsssssssssssssssssssssssssssssssssssssssssssssssssssss', 'asdf', '본문본문본문'];

function CommentContainer() {
  const [addReplyIndex, setAddReplyIndex] = useState();

  return (
    <>
      <p>댓글 3</p>
      <hr />
      <div className={style.container}>
        {comments.map((comment, i) => (
          <>
            <Comment key={i} index={i} body={comment} setAddReplyIndex={setAddReplyIndex} />
            {(addReplyIndex === i) && (
              <ReplyContainer>
                <AddComment />
              </ReplyContainer>
            )}
          </>
        ))}
        <AddComment />
      </div>
    </>
  );
}

export default CommentContainer;
