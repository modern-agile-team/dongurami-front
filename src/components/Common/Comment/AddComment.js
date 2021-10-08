import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { updatePost } from 'redux/slices/post';
import api from 'apis/post';
import styles from '../../../styles/Common/Comment/AddComment.module.scss';
import { useSelector } from 'react-redux';

function AddComment() {
  const dispatch = useDispatch();
  const post = useSelector((state) => state.post);
  const [description, setDescription] = useState('');

  const onChange = (e) => {
    setDescription(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    await api.postComment(post.category, post.no, 'test1', description);
    dispatch(updatePost());
    setDescription('');
  }

  return (
    <div className={styles.container}>
      <div>닉네임</div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="댓글을 남겨보세요" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddComment;
