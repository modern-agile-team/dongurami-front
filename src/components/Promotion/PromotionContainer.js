import { useEffect, useState } from "react";
import styles from "../../styles/Board/Promotion/PromotionContainer.module.scss";
import Header from "../Common/Header";
import TypeSearch from "./TypeSearch";
import { BsPencil } from "react-icons/bs";
import Modal from "./Modal";
import Promotion from "./Promotion";
import Link from "next/link";
import axios from "axios";

const PromotionContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [postId, setPostId] = useState("");
  const [boarddata, setBoardData] = useState([]);
  const [searchItem, setSearchItem] = useState("whole");
  const img =
    "https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg";

  let preitem = 0;
  let item = 8;

  const getData = async () => {
    try {
      console.log("데이터얻어오기");
      await axios
        .get(
          `http://3.36.72.145:8080/api/board/promotion/${searchItem}/inDate/DESC`
        )
        .then((response) => {
          const result = response.data.boards.slice(preitem, item);
          if (result.length) {
            const extraData = boarddata.concat(result);
            setBoardData((prev) => prev.concat(extraData));
          }
        });
    } catch (e) {
      console.log(e);
    }
  };

  const firstGetData = async () => {
    try {
      console.log("시작데이터");
      await axios
        .get(
          `http://3.36.72.145:8080/api/board/promotion/${searchItem}/inDate/DESC`
        )
        .then((response) => {
          preitem = 0;
          item = 8;
          const result = response.data.boards.slice(preitem, item);
          setBoardData(result);
        });
    } catch (e) {
      console.log(e);
    }
  };

  const infiniteScroll = () => {
    let scrollHeight = Math.max(
      document.documentElement.scrollHeight,
      document.body.scrollHeight
    );
    let scrollTop = Math.max(
      document.documentElement.scrollTop,
      document.body.scrollTop
    );
    let clientHeight = document.documentElement.clientHeight;

    if (scrollTop + clientHeight >= scrollHeight) {
      preitem = item;
      item += 8;
      getData();
    }
  };

  useEffect(() => {
    firstGetData();
    window.addEventListener("scroll", infiniteScroll);
    return () => {
      window.removeEventListener("scroll", infiniteScroll);
    };
  }, [searchItem]);

  return (
    <>
      <Header />
      <TypeSearch setSearchItem={setSearchItem} getData={getData} />
      <Link href={`/promotion/write`} passHref>
        <button className={styles.writeBtn}>
          <BsPencil />
          글쓰기
        </button>
      </Link>
      <div className={styles.section}>
        {boarddata.map((el) => (
          <Promotion
            key={el.no}
            pId={el.no}
            date={el.inDate}
            clubName={el.clubName}
            img={img}
            setOpenModal={setOpenModal}
            setPostId={setPostId}
          />
        ))}
      </div>
      {openModal && <Modal setOpenModal={setOpenModal} postId={postId} />}
    </>
  );
};

export default PromotionContainer;
