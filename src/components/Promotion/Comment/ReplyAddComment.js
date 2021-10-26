import { useState } from 'react';
import styles from '../../../styles/Board/Promotion/AddComment.module.scss';
import { replyAddComment } from 'apis/promotion';
import { useDispatch } from 'react-redux';
import { getPost } from 'redux/slices/post';

function ReplyAddComment({ postId, parentCommentId }) {
  const [description, setDescription] = useState('');
  const dispatch = useDispatch();
  const category = 'promotion';
  const pid = postId;

  const onChange = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();

    replyAddComment(postId, parentCommentId, description).then((res) => {
      if (res.data.success) {
        dispatch(getPost({ category, pid }));
      } else alert(res.data.msg);
    });
    setDescription('');
  };
  return (
    <div className={styles.container}>
      <div>닉네임</div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="댓글을 남겨보세요"
          value={description}
          onChange={onChange}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default ReplyAddComment;
