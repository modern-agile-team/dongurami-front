import { useEffect, useState } from 'react';
import styles from '../../../styles/Board/Promotion/AddComment.module.scss';
import { addComment } from 'apis/promotion';
import getToken from 'utils/getToken';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';

function AddComment({ postId, parentCommentID }) {
  const [description, setDescription] = useState('');
  const user = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const category = 'promotion';
  const pid = postId;
  const onChange = (e) => {
    console.log(e.target.value);
    setDescription(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '') return;
    if (description.length > 255) {
      alert('댓글을 255자 이하로 작성해 주세요!');
      return;
    }
    addComment(postId, description, parentCommentID).then((res) => {
      if (res.data.success) dispatch(getPost({ category, pid }));
      else alert(res.data.msg);
    });
    setDescription('');
  };

  return (
    <div className={styles.container}>
      <div>{user ? user.name : '닉네임'}</div>
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

export default AddComment;
