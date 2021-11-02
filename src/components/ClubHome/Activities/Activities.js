import React, { useEffect, useState } from "react";
import styles from "../../../styles/Club/Home/Activities/Activities.module.scss";
import Act from "./Act";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "components/Common/Modal";
import ActivityPost from "./ActivityPost";
import Link from 'next/link';
import { useRouter } from "next/router";
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getBoardPosts } from 'redux/slices/board';

const Activities = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const [selectedID, setSelectedID] = useState();
  const posts = useSelector((state) => state.board.posts);
  const user = useSelector((state) => state.user);

  const clubNum = Number(router.query.id);

  const canWrite = (() => {
    if (!user) return false;
    if (clubNum && user.club.every(({ no }) => no !== clubNum)) return false;
    return true;
  })();

  useEffect(() => {
    dispatch(getBoardPosts({ category: 'clubActivity', sort: 'inDate', order: 'DESC', clubNum }));
  }, [clubNum, dispatch]);

  const onClick = (id) => {
    setSelectedID(id)
  };
  const closeModal = () => {
    setSelectedID();
  }

  const isModalOpened = selectedID !== undefined;

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div id={styles.clubName}>
        <p>우아한 애자일의 활동</p>
      </div>
      {(canWrite) && (
        <div id={styles.add}>
          <Link href={{ pathname: `${router.pathname}/write-activity`, query: router.query }} passHref>
            <a><IoIosAddCircleOutline /></a>
          </Link>
        </div>
      )}
      <div className={styles.activities}>
        {posts.map((post) => {
          return (
            <Act
              key={post.no}
              post={post}
              onClick={onClick}
            />
          );
        })}
      </div>
      {(isModalOpened) && (
        <Modal show={isModalOpened} onClose={closeModal}>
          <ActivityPost pid={selectedID} closeModal={closeModal} />
        </Modal>
      )}
    </div>
  );
};

export default Activities;
