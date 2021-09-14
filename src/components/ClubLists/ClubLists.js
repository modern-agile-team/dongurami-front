import React, { useState, useEffect} from "react";
import styles from "../../styles/Club/Lists/ClubLists.module.scss";
import ClubListContainer from "./ClubListContainer";
import axios from "axios";

const ClubList = () => {
  const [clubData, setClubData] = useState([]);
  const img = 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg';
  
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('http://3.36.72.145:8080/api/club/list');
        setClubData(response.data.result);
        console.log(clubData);
      } catch(e) {
        console.log(e);
      }
    }
    fetchData();
  }, []);
  
  return (
    <div className={styles.container}>
      <div className={styles.activities}>
        {clubData.map((el) => {
          return (
            <ClubListContainer
              img={img}
              title={el.name}
              categories={el.category}
              key={el.no}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ClubList;

