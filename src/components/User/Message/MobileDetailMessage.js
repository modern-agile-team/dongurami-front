import styles from 'styles/Message/MessageList.module.scss';
import { IoPaperPlaneOutline } from 'react-icons/io5';
import { FiRefreshCcw } from 'react-icons/fi';
import { BsTrash } from 'react-icons/bs';
import DetailMessageList from './DetailMessageList';
import { useRouter } from 'next/router';
import { ImArrowLeft } from 'react-icons/im';
import Spinner from './Spiner';

const MobileDetailMessage = ({
  detailMessage,
  recipient,
  inquiryMessage,
  setOpenModal,
  onDelete,
  isLoading
}) => {
  const router = useRouter();
  const onClick = () => {
    router.replace(`message`);
  };
  return (
    <div className={styles.mobiledetailcontainer}>
      {isLoading ? (
        <div className={styles.loadingcontainer}>
          <Spinner />
        </div>
      ) : (
        <>
          <div className={styles.mobiledetailheader}>
            {router?.query.id && (
              <div className={styles.contain}>
                <ImArrowLeft size={20} onClick={onClick} />
                <h3>
                  {recipient}
                  {detailMessage[0]?.myHiddenFlag === 1 ? '(익명)' : ''}
                </h3>
                <div className={styles.option}>
                  <IoPaperPlaneOutline
                    size={20}
                    onClick={() => setOpenModal(true)}
                  />
                  <FiRefreshCcw
                    size={20}
                    onClick={() => inquiryMessage(router.query.id)}
                  />
                  <BsTrash
                    size={20}
                    onClick={() => onDelete(router.query.id)}
                  />
                </div>
              </div>
            )}
          </div>
          {router?.query.id &&
            detailMessage &&
            detailMessage.map((message, idx) => {
              return <DetailMessageList key={idx} message={message} />;
            })}
        </>
      )}
    </div>
  );
};

export default MobileDetailMessage;
