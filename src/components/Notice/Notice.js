import Header from "../Common/Header";
import NoticeTable from "./NoticeTable";
import NoticePagination from "./NoticePagination";
import NoticeSearch from "./NoticeSearch";

function Notice() {
  return (
    <div>
      <Header />
      <div>
        <NoticeTable />
        <NoticePagination />
        <NoticeSearch />
      </div>
    </div>
  );
}

export default Notice;
