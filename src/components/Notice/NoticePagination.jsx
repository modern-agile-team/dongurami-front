import styles from "../../styles/Board/Notice/NoticePagination.module.scss";

function NoticePagination() {
  return (
    <ul className={styles.pagination}>
      <li><button>{'<-'}</button></li>
      <li><button>1</button></li>
      <li><button>2</button></li>
      <li><button>3</button></li>
      <li><button className={styles.selected}>4</button></li>
      <li><button>5</button></li>
      <li><button>...</button></li>
      <li><button>9</button></li>
      <li><button>{'->'}</button></li>
    </ul>
  );
}

export default NoticePagination;
