import React, { useState } from 'react';
import styles from 'styles/Board/Promotion/PromotionContainer.module.scss';
import TypeSearch from './TypeSearch';
import Modal from './Modal';
import PromotionItem from './Promotion';
import SendMessageContainer from 'components/User/Message/SendMessage';
import { Spinner } from 'components/Common/Spinner';

const PromotionContainer = ({
  setSearchItem,
  setSearchKeyword,
  setType,
  type,
  searchKeyword,
  onSearch,
  categorySearch,
  displayedAt,
  isLoading,
  letter,
  boardData,
  openModal,
  sendMessage,
  openMessage,
  setOpenMessage
}) => {
  const [postId, setPostId] = useState(0);

  return (
    <>
      <TypeSearch
        setSearchItem={setSearchItem}
        setSearchKeyword={setSearchKeyword}
        setType={setType}
        type={type}
        searchKeyword={searchKeyword}
        onSearch={onSearch}
        categorySearch={categorySearch}
      />

      <div className={styles.section}>
        {isLoading ? (
          <div className={styles.loadingContainer}>
            <Spinner />
          </div>
        ) : (
          <>
            {boardData.length ? (
              <div className={styles.sectionwrap}>
                {boardData.map((post) => {
                  return (
                    <PromotionItem
                      key={post.no}
                      post={post}
                      setPostId={setPostId}
                      displayedAt={displayedAt}
                    />
                  );
                })}
              </div>
            ) : (
              <div className={styles.emptyBoard}>
                <p>게시글이 존재하지 않습니다</p>
              </div>
            )}
          </>
        )}
      </div>
      {openModal && (
        <Modal
          postId={postId}
          sendMessage={sendMessage}
          setOpenMessage={setOpenMessage}
        />
      )}
      <SendMessageContainer
        show={openMessage}
        onClose={() => setOpenMessage(false)}
        letter={letter}
      />
    </>
  );
};

export default PromotionContainer;
