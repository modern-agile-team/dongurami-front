import { useState, useEffect } from 'react';
import styles from '../../styles/Board/Promotion/Modal.module.scss';
import Post from './Post';
import { MdClose } from 'react-icons/md';
import { IoIosArrowBack, IoIosArrowForward } from 'react-icons/io';
import ZoomImg from './ZoomImg';
import { getPost } from 'apis/promotion';

const Modal = ({ setOpenModal, postId }) => {
  const [index, setIndex] = useState(0);
  const [zoom, setZoom] = useState(false);
  const [images, setImages] = useState([]);
  const [imgUrl, setImgUrl] = useState('');
  const [postData, setPostData] = useState([]);
  const [comments, setComments] = useState([]);

  const nextSlide = () => {
    let idx = index;

    if (idx !== images.length - 1) {
      idx += 1;
    } else if (idx === images.length - 1) {
      idx = 0;
    }

    setIndex(idx);
    setImgUrl(images[index].imgPath);
  };

  const prevSlide = () => {
    let idx = index;

    if (idx === 0) idx = getdata.length - 1;
    else idx -= 1;
    setIndex(idx);
    setImgUrl(images[index].imgPath);
  };

  const getData = async () => {
    try {
      await getPost(postId).then((res) => {
        if (res.data.success) {
          console.log(res.data.images[0].imgPath);
          setImages(res.data.images);
          setImgUrl(res.data.images[index].imgPath);
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
            <IoIosArrowBack onClick={() => prevSlide()} size={70} />
            <img src={imgUrl} onClick={() => setZoom(true)} />
            <IoIosArrowForward onClick={() => nextSlide()} size={70} />
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
