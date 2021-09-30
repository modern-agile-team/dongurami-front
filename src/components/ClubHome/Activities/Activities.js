import React, { useState } from "react";
import styles from "../../../styles/Club/Home/Activities/Activities.module.scss";
import Act from "./Act";
import { IoIosAddCircleOutline } from "react-icons/io";
import Modal from "components/Common/Modal";
import Post from "components/Post/Post";
import ActivityPost from "./ActivityPost";
import Link from 'next/link';
import router, { useRouter } from "next/router";

const actData = [
  {
    "no": 236,
    "title": "ㄴㄹㅇㄴㄹ",
    "studentId": "201908048",
    "studentName": "이석호",
    "clubName": "우아한 애자일",
    "category": "IT",
    "inDate": "2021-09-29 13:22:16",
    "modifyDate": "2021-09-29 13:22:16",
    "url": null,
    "fileId": null,
    "hit": 13
  },
  {
    "no": 235,
    "title": "ㅛㅎㅎ허ㅗ",
    "studentId": "201908048",
    "studentName": "이석호",
    "clubName": "우아한 애자일",
    "category": "IT",
    "inDate": "2021-09-28 17:51:44",
    "modifyDate": "2021-09-28 17:51:44",
    "url": null,
    "fileId": null,
    "hit": 13
  },
  {
    "no": 226,
    "title": "dfadsf",
    "studentId": "test1",
    "studentName": "test1",
    "clubName": "우아한 애자일",
    "category": "IT",
    "inDate": "2021-09-27 16:40:27",
    "modifyDate": "2021-09-27 16:40:27",
    "url": null,
    "fileId": null,
    "hit": 12
  },
  {
    "no": 163,
    "title": "asdf",
    "studentId": "test1",
    "studentName": "test1",
    "clubName": "우아한 애자일",
    "category": "IT",
    "inDate": "2021-09-17 11:25:57",
    "modifyDate": "2021-09-17 11:25:57",
    "url": null,
    "fileId": null,
    "hit": 23
  },
  {
    "no": 160,
    "title": "제목수정",
    "studentId": "test1",
    "studentName": "test1",
    "clubName": "우아한 애자일",
    "category": "IT",
    "inDate": "2021-09-16 11:16:32",
    "modifyDate": "2021-09-27 11:31:42",
    "url": null,
    "fileId": null,
    "hit": 137
  }
];

const Activities = () => {
  const [isModalOpened, setIsModalOpened] = useState(false);
  const [selectedID, setSelectedID] = useState();
  const router = useRouter();

  const onClick = (id) => {
    setSelectedID(id)
    setIsModalOpened(true);
  };
  const onClose = () => {
    setSelectedID();
    setIsModalOpened(false);
  }

  return (
    <div className={styles.container}>
      <div id={styles.clubName}>
        <p>우아한 애자일의 활동</p>
      </div>
      <div id={styles.add}>
        <Link href={`${router.pathname}/writeActivity`} passHref><IoIosAddCircleOutline /></Link>
      </div>
      <div className={styles.activities}>
        {actData.map((el, i) => {
          return (
            <Act
              id={el.no}
              img={`https://picsum.photos/500?random=${i}`}
              title={el.title}
              key={el.no}
              onClick={onClick}
            />
          );
        })}
      </div>
      {(isModalOpened) && (
        <Modal show={isModalOpened} onClose={onClose}>
          <ActivityPost />
        </Modal>
      )}
    </div>
  );
};

export default Activities;
