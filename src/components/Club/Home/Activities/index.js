import React, { useEffect, useState } from 'react';
import styles from 'styles/Club/Home/Activities/Activities.module.scss';
import Act from './Act';
import { IoIosAddCircleOutline } from 'react-icons/io';
import Modal from 'components/Common/Modal';
import ActivityPost from './ActivityPost';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { getBoardPosts } from 'redux/slices/board';
import SendMessageContainer from 'components/User/Message/SendMessage';
import api from 'apis/post';

const Activities = ({ clubs }) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.board.posts);
  const user = useSelector((state) => state.user);
  const [messageOpen, setMessageOpen] = useState(false);

  const post = useSelector((state) => state.post);
  const clubNum = Number(router.query.id);
  const selectedID = Number(router.query.pid);

  const canWrite = (() => {
    if (!user) return false;
    if (clubNum && user.club.every(({ no }) => no !== clubNum)) return false;
    return true;
  })();

  const onDelete = async () => {
    await api.deletePost('clubActivity', post.no, router.query.id);
    dispatch(
      getBoardPosts({
        category: 'clubActivity',
        sort: 'inDate',
        order: 'DESC',
        clubNum
      })
    );
    closeModal();
  };

  useEffect(() => {
    dispatch(
      getBoardPosts({
        category: 'clubActivity',
        sort: 'inDate',
        order: 'DESC',
        clubNum: Number(router.query.id)
      })
    );
  }, [router, dispatch]);

  const onClick = (id) => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          ...router.query,
          pid: id
        }
      },
      undefined,
      { scroll: false }
    );
  };

  const closeModal = () => {
    router.push(
      {
        pathname: router.pathname,
        query: {
          id: router.query.id
        }
      },
      undefined,
      { scroll: false }
    );
  };

  const isModalOpened = Boolean(selectedID);

  if (!posts) return null;

  return (
    <div className={styles.container}>
      <div id={styles.clubName}>
        <p>{clubs.info.result.clubInfo.name}의 활동</p>
      </div>
      {canWrite && (
        <div id={styles.add}>
          <Link
            href={{
              pathname: `${router.pathname}/write-activity`,
              query: router.query
            }}
            passHref
          >
            <a>
              <IoIosAddCircleOutline />
            </a>
          </Link>
        </div>
      )}
      <div className={styles.activities}>
        {posts.map((post) => {
          return <Act key={post.no} post={post} onClick={onClick} />;
        })}
      </div>
      {isModalOpened && (
        <Modal show={isModalOpened} onClose={closeModal}>
          <ActivityPost
            pid={selectedID}
            post={post}
            onDelete={onDelete}
            setOpenMessage={setMessageOpen}
          />
        </Modal>
      )}
      {messageOpen && (
        <SendMessageContainer
          show={messageOpen}
          onClose={() => setMessageOpen(false)}
          isActivities={true}
        />
      )}
    </div>
  );
};

export default Activities;
