import styles from '../../styles/Message/MessagePreview.module.scss';
import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

const MessagePreview = ({ message, onClickInquiry }) => {
  const router = useRouter();

  return (
    <div
      className={
        router.query.id == message.no
          ? styles.clickedcontainer
          : styles.container
      }
      onClick={() => onClickInquiry(message.no)}
    >
      <div className={styles.info}>
        <h4 className={styles.name}>{message.name}</h4>
        <p className={styles.indate}>{message.inDate}</p>
      </div>

      <span className={styles.description}>{message.description}</span>
    </div>
  );
};

export default MessagePreview;
