import styles from 'styles/Club/Home/Schedule/DailyModal.module.scss';

const SelectColors = ({ colors, onClickColorBtn }) => {
  return (
    <div>
      <p>μΌμ  μμ</p>
      {colors.map((color, index) => {
        return (
          <button
            className={styles.colorBtn}
            key={index}
            style={{ background: color }}
            onClick={() => onClickColorBtn(color)}
          />
        );
      })}
    </div>
  );
};

export default SelectColors;
