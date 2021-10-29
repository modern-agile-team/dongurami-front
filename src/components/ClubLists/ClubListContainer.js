import React, { useState, useEffect } from 'react';
import Header from '../Common/Header/Header';
import TypeSearch from './TypeSearch';
import styles from '../../styles/Club/Lists/ClubLists.module.scss';
import ClubList from './ClubList';
import { getDatas } from 'apis/clublist';

const ClubListContainer = () => {
  const [clubData, setClubData] = useState([]);
  const [originData, setOriginData] = useState([]);

  const onCategorySearch = (element) => {
    const searchData = originData.filter((el) => el.category === element);

    if (element === '') setClubData(originData);
    else setClubData(searchData);
  };

  const onSearch = (data) => {
    const searchData = originData.filter((el) => el.name.includes(data));
    setClubData(searchData);
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDatas();
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
                img={el.logoUrl}
                title={el.name}
                categories={el.category}
                key={el.no}
                clubNo={el.no}
                clubName={el.name}
              />
            );
          })}
        </div>
      </div>
    </>
  );
};

export default ClubListContainer;
