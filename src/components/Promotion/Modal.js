import { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import Post from './Post';
import { MdClose } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ZoomImg from './ZoomImg';
import { getdata } from './getdata';
import { getPost } from 'apis/promotion';

const Modal = ({ setOpenModal, postId }) => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [imgUrl, setImgUrl] = useState(getdata[index].img);
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState([]);

  const nextSlide = () => {
    let idx = index;

    if (idx !== getdata.length - 1) {
      idx += 1;
    } else if (idx === getdata.length - 1) {
      idx = 0;
    }

    setIndex(idx);
    setImgUrl(getdata[index].img);
  };

  const prevSlide = () => {
    let idx = index;

    if (idx === 0) idx = getdata.length - 1;
    else idx -= 1;

    setIndex(idx);
    setImgUrl(getdata[index].img);
  };

  const getData = async () => {
    try {
      await getPost(postId).then((res) => {
        if (res.data.success) {
          console.log(res);
          setPostData(res.data.board);
          setComments(res.data.comments);
        } else alert(res.data.msg);
      });
    } catch (err) {
      console.log(err.response.data.msg);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div className={styles.background} onClick={() => setOpenModal(false)}>
      {zoom && (
        <ZoomImg
          imgUrl={imgUrl}
          setZoom={setZoom}
          onClick={(e) => e.stopPropagation()}
        />
      )}
      {!zoom && (
        <>
          <div className={styles.image} onClick={(e) => e.stopPropagation()}>
            <IoIosArrowBack size={70} onClick={prevSlide} />
            <img src={imgUrl} onClick={() => setZoom(true)} />
            <IoIosArrowForward size={70} onClick={nextSlide} />
          </div>
          <Post
            postData={postData}
            postId={postId}
            setPostData={setPostData}
            comments={comments}
            getData={getData}
          />
        </>
      )}
    </div>
  );
};

export default Modal;
