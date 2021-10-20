import { useState } from 'react';
import api from 'apis/post';
import styles from '../../../styles/Common/Comment/AddComment.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';

function AddComment({ parentCommentID }) {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState('');

  const onChange = (e) => {
    setDescription(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await api.postComment({ category: post.category, pid: post.no, id: 'test1', description, parentCommentID });
    setDescription('');
    dispatch(getPost());
  }

  return (
    <div className={styles.container}>
      <div>{user.name}</div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="댓글을 남겨보세요" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddComment;
