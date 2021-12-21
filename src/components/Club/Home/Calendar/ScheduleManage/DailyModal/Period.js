const Period = ({ setStartDate, setEndDate, startDate, endDate }) => {
  return (
    <>
      <p>시작하는 날짜</p>
      <input
        id="startDate"
        type="date"
        onChange={(e) => setStartDate(e.target.value)}
      />
      <p>끝나는 날짜</p>
      <input
        id="endDate"
        type="date"
        onChange={(e) => setEndDate(e.target.value)}
      />{' '}
      <br /> <br />
      {startDate} ~ {endDate} <br />
    </>
  );
};

export default Period;
