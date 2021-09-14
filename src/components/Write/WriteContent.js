import { useRouter } from "next/router";
import { useState } from "react";
import styles from "../../styles/Board/Write/WriteContent.module.scss";
import ReactQuillContainer from "./ReactQuillContainer";

function Write({ category }) {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const router = useRouter();

  const onSubmit = () => {
    fetch(`http://3.36.72.145:8080/api/board/${category}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: 'test1',
        clubNo: '1',
        title,
        description: body
      })
    }).then(() => {
      router.push(`/${category}`)
    });
  };

  return (
    <div className={styles.container}>
      <input type="text" placeholder="제목을 입력하세요..." value={title} onChange={(e) => setTitle(e.target.value)} />
      <hr />
      <div></div>
      <ReactQuillContainer body={body} setBody={setBody} />
      <div>
        <button onClick={onSubmit}>등록</button>
      </div>
    </div>
  );
}

export default Write;
