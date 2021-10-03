import React, { useEffect, useState } from "react";
import styles from "../../../styles/Club/Home/Activities/Activities.module.scss";
import Act from "./Act";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "components/Common/Modal";
import ActivityPost from "./ActivityPost";
import Link from 'next/link';
import { useRouter } from "next/router";
import axios from "axios";
import getToken from "utils/getToken";

const Activities = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const [posts, setPosts] = useState([]);
  const router = useRouter();

  const updatePosts = async () => {
    const token = getToken();
    const response = await axios.get(
      "http://3.36.72.145:8080/api/club/board/clubActivity/1/inDate/desc",
      {
        headers: {
          "x-auth-token": token
        }
      }
    );
    setPosts(response.data.boards);
  };

  useEffect(() => {
    updatePosts();
  }, []);

  const onClick = (id) => {
    setSelectedID(id)
    setIsModalOpened(true);
  };
  const closeModal = () => {
    setIsModalOpened(false);
    setSelectedID();
  }

  return (
    <div className={styles.container}>
      <div id={styles.clubName}>
        <p>우아한 애자일의 활동</p>
      </div>
      <div id={styles.add}>
        <Link href={`${router.pathname}/write-activity`} passHref><IoIosAddCircleOutline /></Link>
      </div>
      <div className={styles.activities}>
        {posts.map((el, i) => {
          return (
            <Act
              key={el.no}
              no={el.no}
              img={`https://picsum.photos/500?random=${i}`}
              title={el.title}
              onClick={onClick}
            />
          );
        })}
      </div>
      {(isModalOpened) && (
        <Modal show={isModalOpened} onClose={closeModal}>
          <ActivityPost no={selectedID} closeModal={closeModal} updatePosts={updatePosts} />
        </Modal>
      )}
    </div>
  );
};

export default Activities;
