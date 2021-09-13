import React, { useState, useEffect} from "react";
import styles from "../../styles/Club/Lists/ClubLists.module.scss";
import ClubListContainer from "./ClubListContainer";
import axios from "axios";
const list = [
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "프리버드",
    categories: "음악",
    img:  'https://i.pinimg.com/236x/82/13/43/82134367f8d18218a5175b9778ec97e4.jpg'
  },
  {
    title: "소리상공",
    categories: "음악",
    img: 'https://i.pinimg.com/236x/06/19/93/061993aa61c91040f93157bfc6f373f8.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
  {
    title: "우아한 애자일",
    categories: "IT",
    img: 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg'
  },
];


const ClubList = () => {
  const [clubData, setClubData] = useState([]);
  const img = 'https://i.pinimg.com/236x/5b/4f/3f/5b4f3f801c99430ef0189e0fd8bc5855.jpg';
  useEffect(() => {
    const fetchData = async() => {
      try {
        const response = await axios.get('http://3.36.72.145:8080/api/club/list');
        setClubData(response.data.result);
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

