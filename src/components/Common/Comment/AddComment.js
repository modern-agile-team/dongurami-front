import { useEffect, useRef, useState } from 'react';
import api from 'apis/post';
import styles from '../../../styles/Common/Comment/AddComment.module.scss';
import { useDispatch, useSelector } from 'react-redux';
import { getPost } from 'redux/slices/post';
import { useRouter } from 'next/router';

function AddComment({ parentCommentID, scroll }) {
  const dispatch = useDispatch();
  const router = useRouter();
  const post = useSelector((state) => state.post);
  const user = useSelector((state) => state.user);
  const [description, setDescription] = useState('');
  const [isAnon, setIsAnon] = useState(false);
  const ref = useRef();

  const onChange = (e) => {
    setDescription(e.target.value);
  };
  const onSubmit = async (e) => {
    e.preventDefault();
    if (description.trim() === '') return;
    if (description.length > 255) {
      alert('댓글을 255자 이하로 작성해 주세요!');
      return;
    }
    await api.postComment({ category: post.category, pid: post.no, id: 'test1', description, parentCommentID, clubNum: router.query.id, hiddenFlag: Number(Boolean(isAnon)) });
    setDescription('');
    dispatch(getPost());
  }

  useEffect(() => {
    if (scroll) {
      ref.current.scrollIntoView();
    }
  }, [scroll]);

  return (
    <div ref={ref} className={styles.container}>
      <div className={styles.topBar}>
        <div>{user.name}</div>
        <div className={styles.anonContainer}>
          <label htmlFor={`anon${parentCommentID}`}>익명</label>
          <input type="checkbox" id={`anon${parentCommentID}`} checked={isAnon} onChange={(e) => setIsAnon(e.target.checked)} />
        </div>
      </div>
      <form onSubmit={onSubmit}>
        <input type="text" placeholder="댓글을 남겨보세요" value={description} onChange={onChange} />
        <button type="submit">등록</button>
      </form>
    </div>
  );
}

export default AddComment;
