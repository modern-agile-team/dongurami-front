import { GrNext } from 'react-icons/gr';

const NextPage = ({ page, lastPage, setPage }) => {
  return (
    <li>
      <button
        onClick={() => {
          page < lastPage && setPage(page + 1);
        }}
      >
        <GrNext />
      </button>
    </li>
  );
};

export default NextPage;
