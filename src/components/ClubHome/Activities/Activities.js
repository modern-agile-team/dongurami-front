import React from "react";
import styles from "../../../styles/Club/Home/Activities/Activities.module.scss";

import Act from "./Act";
import { IoIosAddCircleOutline } from "react-icons/io";

export const actData = [
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F53d776c9-e554-43a0-8302-18bf515a6c2f%2F.jpeg?table=block&id=87877f66-2e52-43c0-9506-2705ba92160c&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2160&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-01-31",
    desc: "심서현",
    key: 0,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fc4282d5b-28a8-43bf-946d-1f3bbf4f209e%2F.jpeg?table=block&id=03dd6ada-2448-4c71-af8e-c0a6f3d89566&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2160&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-02-31",
    desc: "박현우",
    key: 1,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F24786a7b-55af-4afc-b7b9-784ce4f772db%2F.jpeg?table=block&id=74dc6c40-589a-4ebd-a671-5a3aa1536fa8&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2160&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-03-31",
    desc: "유준상",
    key: 2,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Faca0f375-4b97-43f0-9126-361d2a9aaa34%2F.jpeg?table=block&id=59652cb8-402c-4dea-b067-63ad97437916&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=1920&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-04-31",
    desc: "배범수",
    key: 3,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F79e3b45d-cfff-4119-9c1a-db28e4061d40%2F.jpeg?table=block&id=0fd69531-587f-4039-9a71-efbf613c92a4&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2880&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-05-31",
    desc: "민순기",
    key: 4,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fe5b6456c-10ed-4570-b60d-f3a5c4c729f6%2F.jpeg?table=block&id=e2706cde-8e3d-408a-b6ad-326c296a7f05&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2940&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-06-31",
    desc: "오창훈",
    key: 5,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F08e6b24f-580c-4158-9b54-b943eb522858%2F.jpg?table=block&id=a1bffbb2-7e08-4e04-9e50-b395b426e9b9&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2160&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-07-31",
    desc: "이석호",
    key: 6,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2Fa7a90cb9-6987-46dc-b5a1-8d27ab68bfda%2F.jpeg?table=block&id=d0c34eb2-1dee-486f-b1bc-236fa6c83732&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=2700&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-08-31",
    desc: "김지수",
    key: 7,
  },
  {
    img: "https://www.notion.so/image/https%3A%2F%2Fs3-us-west-2.amazonaws.com%2Fsecure.notion-static.com%2F0418e7e1-30bc-4519-b893-173977071a0a%2F.jpeg?table=block&id=fd4c1f3a-40f8-4358-bcd6-7fac02f3199d&spaceId=065109dd-4d22-4e3f-9455-ff3805b7d264&width=1500&userId=601054f0-a611-49e0-84b9-04831ec920f4&cache=v2",
    date: "2021-09-31",
    desc: "류가희",
    key: 8,
  },
];

const Activities = ({ onClick }) => {
  return (
    <div className={styles.container}>
      <div id={styles.clubName}>
        <p>우아한 애자일의 활동</p>
      </div>
      <div id={styles.add}>
        <IoIosAddCircleOutline />
      </div>
      <div className={styles.activities}>
        {actData.map((el) => {
          return (
            <Act
              img={el.img}
              desc={el.desc}
              date={el.date}
              onClick={onClick}
              key={el.key}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Activities;
