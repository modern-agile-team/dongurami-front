import React, { useState, useEffect } from "react";
import Header from "../Common/Header/Header";
import TypeSearch from "./TypeSearch";
import styles from "../../styles/Club/Lists/ClubLists.module.scss";
import ClubList from "./ClubList";
import axios from "axios";

const ClubListContainer = () => {
  const [clubData, setClubData] = useState([]);
  const [originData, setOriginData] = useState([]);
  const img =
    "https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg";

  const onCategorySearch = (element) => {
    const searchData = originData.filter((el) => el.category === element);
    setClubData(searchData);
  };

  const onSearch = (data) => {
    const searchData = originData.filter((el) => el.name.includes(data));
    setClubData(searchData);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await axios.get(
          "http://3.36.72.145:8080/api/club/list"
        );
        setClubData(response.data.result);
        setOriginData(response.data.result);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <>
      <Header />
      <TypeSearch onCategorySearch={onCategorySearch} onSearch={onSearch} />
      <div className={styles.container}>
        <div className={styles.activities}>
          {clubData.map((el) => {
            return (
              <ClubList
                img={img}
                title={el.name}
                categories={el.category}
                key={el.no}
<<<<<<< HEAD
                clubNum={el.no}
=======
                clubNo={el.no}
>>>>>>> 85a0b797b86a43cac5fd2d06f0560eadaf52794c
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClubListContainer;
