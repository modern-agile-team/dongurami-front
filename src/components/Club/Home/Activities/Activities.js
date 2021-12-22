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

const Activities = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.board.posts);
  const user = useSelector((state) => state.user);
  const clubName = useSelector((state) => state.clubhome.info?.result[0].name);
  const [messageOpen, setMessageOpen] = useState(false);
  const [isActivities, setIsActivities] = useState(true);

  const clubNum = Number(router.query.id);
  const selectedID = Number(router.query.pid);

  const canWrite = (() => {
    if (!user) return false;
    if (clubNum && user.club.every(({ no }) => no !== clubNum)) return false;
    return true;
  })();

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
        <p>{clubName}의 활동</p>
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
            closeModal={closeModal}
            setOpenMessage={setMessageOpen}
          />
        </Modal>
      )}
      {messageOpen && (
        <SendMessageContainer
          show={messageOpen}
          onClose={() => setMessageOpen(false)}
          isActivities={isActivities}
        />
      )}
    </div>
  );
};

export default Activities;
