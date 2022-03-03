import React, { useEffect, useState } from 'react';
import TypeSearch from './TypeSearch';
import styles from 'styles/Club/Lists/ClubLists.module.scss';
import ClubListItem from './ClubList';
import { Spinner } from 'components/Common/Spinner';

const ClubListContainer = ({ clubData, onCategorySearch, onSearch }) => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    if (clubData.length > 0) setIsLoading(false);
  }, [clubData]);

  return (
    <>
      <TypeSearch onCategorySearch={onCategorySearch} onSearch={onSearch} />
      {isLoading ? (
        <Spinner />
      ) : (
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
      )}
    </>
  );
};

export default ClubListContainer;
