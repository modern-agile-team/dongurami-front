import { useEffect, useRef, useState } from 'react';
import styles from '../../../styles/Board/Promotion/AddComment.module.scss';
import { addComment, addCommentAlarm } from 'apis/promotion';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';

function AddComment({ parentCommentID, scroll, reply }) {
  const [description, setDescription] = useState('');
  const [isAnon, setIsAnon] = useState(false);
  const user = useSelector((state) => state.user);
  const post = useSelector((state) => state.post);
  const dispatch = useDispatch();
  const ref = useRef();
  const inputRef = useRef();
  const onChange = (e) => {
    setDescription(e.target.value);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    if (description.trim() === '') return;
    if (description.length > 255) {
      alert('댓글을 255자 이하로 작성해 주세요!');
      return;
    }
    addComment(
      post.no,
      description,
      parentCommentID,
      Number(Boolean(isAnon))
    ).then((res) => {
      if (res.data.success) {
        dispatch(getPost());
        addCommentAlarm(post.no, description, parentCommentID);
      } else alert(res.data.msg);
    });
    setDescription('');
  };

  useEffect(() => {
    if (scroll) {
      ref.current.scrollIntoView();
    }
    if (reply) inputRef.current.focus();
  }, [scroll]);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.topBar}>
        <div>{user ? user.name : '닉네임'}</div>
        <div className={styles.anonContainer}>
          <label htmlFor={`anon${parentCommentID}`}>익명</label>
          <input
            type="checkbox"
            id={`anon${parentCommentID}`}
            checked={isAnon}
            onChange={(e) => setIsAnon(e.target.checked)}
          />
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <input
          type="text"
          placeholder="댓글을 남겨보세요"
          value={description}
          onChange={onChange}
          ref={inputRef}
        />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddComment;
