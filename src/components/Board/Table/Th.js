const Th = ({ thName }) => {
  return (
    <thead>
      <tr>
        {thName.map((tag, idx) => {
          return <th key={idx}>{tag}</th>;
        })}
      </tr>
    </thead>
  );
};

export default Th;
