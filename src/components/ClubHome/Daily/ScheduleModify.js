import styles from "../../../styles/Club/Home/Schedule/ScheduleModify.module.scss";

const ScheduleModify = ({ no, setPop, pop }) => {
  console.log(pop);
  if (pop === 3)
    return (
      <div>
        <div>
          <h3>일정 수정</h3>
        </div>
        <div>
          <p>시작하는 날짜</p>
        </div>
      </div>
    );
  else return null;
};

export default ScheduleModify;
