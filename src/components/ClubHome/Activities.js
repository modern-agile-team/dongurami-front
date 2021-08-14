import React from "react";
import styles from "../../styles/Club/Activities/Activities.module.sass";

export const Activities = () => {
  return (
    <div className={styles.all}>
      <header className={styles.Header}>
        <h1 className={styles.title}>활동 내용</h1>
        <button className={styles.addbtn}>활동 추가</button>
        <hr className={styles.line} />
      </header>
      <body className={styles.body}>
        <div className={styles.third}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRDB2-VY7u5DF3SuIWpaRkl1SPSmhycL8W40Q&usqp=CAU"></img>
          <p className={styles.thirdDay}>2021-08-11</p>
        </div>
        <div className={styles.second}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRlkBLQrWH7CIJSI3l_uexxiZ-wnZ7zmakTCA&usqp=CAU"></img>
          <p className={styles.secondDay}>2021-08-03</p>
        </div>
        <div className={styles.first}>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR3I8P_zk6OrAQv5P6VVNEcZKke1qorZ-a2Ow&usqp=CAU"></img>
          <p className={styles.firstDay}>2021-07-31</p>
        </div>
      </body>
    </div>
  );
};

export default Activities;
