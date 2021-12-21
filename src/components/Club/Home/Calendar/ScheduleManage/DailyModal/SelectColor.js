import styles from 'styles/Club/Home/Schedule/DailyModal.module.scss';

const SelectColors = ({ colors, onClickColorBtn }) => {
  return (
    <div>
      <p>일정 색상</p>
      {colors.map((color, index) => {
        return (
          <button
            className={styles.colorBtn}
            key={index}
            style={{ background: color }}
            onClick={() => onClickColorBtn(color)}
          ></button>
        );
      })}
    </div>
  );
};

export default SelectColors;
