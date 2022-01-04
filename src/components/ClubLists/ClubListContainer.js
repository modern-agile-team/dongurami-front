import React, { useState, useEffect } from 'react';
import TypeSearch from './TypeSearch';
import styles from '../../styles/Club/Lists/ClubLists.module.scss';
import ClubList from './ClubList';
import { getDatas, searchDatas } from 'apis/clublist';

const ClubListContainer = () => {
  const [clubData, setClubData] = useState([]);
  const [originData, setOriginData] = useState([]);

  const onCategorySearch = (element) => {
    const searchData = originData.filter((el) => el.category === element);

    if (element === '전체') setClubData(originData);
    else setClubData(searchData);
  };

  const onSearch = async (data) => {
    await searchDatas(data).then((response) => {
      if (response.data.clubs.length === 0) {
        alert('검색결과가 없습니다');
        return;
      }
      setClubData(response.data.clubs);
    });
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
