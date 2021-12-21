import React from 'react';
import TypeSearch from './TypeSearch';
import styles from 'styles/Club/Lists/ClubLists.module.scss';
import ClubListItem from './ClubList';

const ClubListContainer = ({ clubData, onCategorySearch, onSearch }) => {
  return (
    <>
      <TypeSearch onCategorySearch={onCategorySearch} onSearch={onSearch} />
      <div className={styles.container}>
        <div className={styles.activities}>
          {clubData.map((el) => {
            return (
              <ClubListItem
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
