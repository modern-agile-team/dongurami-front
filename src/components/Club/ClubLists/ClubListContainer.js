import React, { useState, useEffect } from 'react';
import TypeSearch from './TypeSearch';
import styles from 'styles/Club/Lists/ClubLists.module.scss';
import ClubList from './ClubList';
import { getDatas, searchDatas } from 'apis/clublist';

const ClubListContainer = ({ clubData, onCategorySearch, onSearch }) => {
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
