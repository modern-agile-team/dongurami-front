import React, { useState, useEffect } from 'react';
import ClubListContainer from './ClubListContainer';
import { getDatas, searchDatas } from 'apis/clublist';

const ClubList = () => {
  const [clubData, setClubData] = useState([]);
  const [originData, setOriginData] = useState([]);

  const onCategorySearch = (element) => {
    const searchData = originData.filter((el) => el.category === element);

    if (element === '전체') setClubData(originData);
    else setClubData(searchData);
  };

  const onSearch = async (data) => {
    await searchDatas(data).then((response) => {
      if (response.data.result.length === 0) {
        alert('검색결과가 없습니다');
        return;
      }
      setClubData(response.data.result);
    });
  };

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await getDatas();
        setClubData(response.data.clubList);
        setOriginData(response.data.result);
      } catch (e) {
        console.log(e);
      }
    };
    getData();
  }, []);

  return (
    <ClubListContainer
      clubData={clubData}
      originData={originData}
      onCategorySearch={onCategorySearch}
      onSearch={onSearch}
    />
  );
};

export default ClubList;
