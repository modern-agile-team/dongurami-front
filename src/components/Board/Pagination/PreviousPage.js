import { GrPrevious } from 'react-icons/gr';

const PreviousPage = ({ page, setPage }) => {
  return (
    <li>
      <button
        onClick={() => {
          page > 1 && setPage(page - 1);
        }}
      >
        <GrPrevious />
      </button>
    </li>
  );
};
export default PreviousPage;
