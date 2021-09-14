import { useEffect, useState } from "react";
import styles from "../../styles/Board/Promotion/PromotionContainer.module.scss";
import Header from "../Common/Header";
import TypeSearch from "./TypeSearch";
import { BsPencil } from "react-icons/bs";
import Modal from "./Modal";
import Promotion from "./Promotion";
import Link from "next/dist/client/link";
import axios from "axios";

const PromotionContainer = () => {
  const [openModal, setOpenModal] = useState(false);
  const [value, setValue] = useState("");
  const [boarddata, setBoardData] = useState([]);
  const img =
    "https://i.pinimg.com/236x/df/ef/48/dfef48b50816f9d55767a0260798f0d2.jpg";

  let preitem = 0;
  let item = 8;

  const getData = async () => {
    try {
      await axios
        .get("http://3.36.72.145:8080/api/board/notice/inDate/DESC")
        .then((response) => {
          console.log(response);
          const result = response.data.boards.slice(preitem, item);
          const extraData = boarddata.concat(result);

          setBoardData((prev) => prev.concat(extraData));
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
    getData();
    window.addEventListener("scroll", infiniteScroll);
  }, []);

  return (
    <>
      <Header />
      <TypeSearch />
      <Link href="/write" passHref>
        <button className={styles.writeBtn}>
          <BsPencil />
          글쓰기
        </button>
      </Link>
      <div className={styles.section}>
        {boarddata.map((el) => (
          <Promotion
            key={el.no}
            date={el.inDate}
            clubName={el.clubName}
            img={img}
            setOpenModal={setOpenModal}
            setValue={setValue}
          />
        ))}
      </div>
      {openModal && <Modal value={value} setOpenModal={setOpenModal} />}
    </>
  );
};

export default PromotionContainer;
