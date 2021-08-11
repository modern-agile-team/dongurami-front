import Header from '../Common/Header';
import NoticeTable from "./NoticeTable";
import NoticePagination from './NoticePagination';

function Notice() {
  return (
    <div>
      <Header />
      <div>
        <NoticeTable />
        <NoticePagination />
      </div>
    </div>
  );
}

export default Notice;
